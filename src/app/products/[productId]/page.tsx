"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { RootState } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, loadingCart } from "@/redux/slices/cartSlice";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { booksList, authorInfo } from "@/utils/constants";
import { Product } from "@/types";
import { QuantityButton } from "@/components/Buttons";
import { isEmpty } from "lodash";
import {
  ToastNotification,
  emitterSettings,
} from "@/components/ToastNotification";
import Link from "next/link";
import Product404State from "@/app/products/components/Product404State";

export default function ProductItemPage() {
  const dispatch = useDispatch();
  const { productsInCart, loading } = useSelector(
    (state: RootState) => state.cart
  );
  const [product, setProduct] = useState<Product | null>(null);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [productIsInCart, setProductIsInCart] = useState(false);
  const [productNotFound, setProductNotFound] = useState(false);

  const productId = parseInt(usePathname().split("/")[2]);

  // set quantity to corresponding value in cart
  useEffect(() => {
    if (isEmpty(productsInCart) || !productId) return;

    if (productsInCart[productId]) {
      setProductIsInCart(true);
      const quantityInCart = productsInCart[productId]?.quantity;
      setItemQuantity(quantityInCart || 1);
    }
  }, [productsInCart, productId]);

  // fetch product data from books list
  useEffect(() => {
    const product = booksList[productId];
    if (!product) {
      setProductNotFound(true);
    } else {
      setProduct(product);
      setProductNotFound(false);
    }
  }, [productId]);

  // succes notification
  const notify = (text: string) => {
    toast.success(text, emitterSettings);
  };

  // add item to cart
  const addItemToCart = () => {
    dispatch(loadingCart(true));
    if (product) {
      dispatch(addToCart({ ...product, quantity: itemQuantity }));
    }
    dispatch(loadingCart(false));

    notify(`${productIsInCart ? "Product updated" : "Product added to cart"}`);
  };

  return (
    <div className="container mx-auto max-w-[1015px] pt-12 pb-24">
      {productNotFound ? (
        <Product404State />
      ) : (
        <>
          {/* title, author, description */}
          <div className="relative mb-12 w-full text-left space-y-2">
            <h1 className="uppercase text-orange font-bold">
              {authorInfo.name}
            </h1>
            <h2 className="text-2xl font-bold">{product?.title}</h2>

            {/* back button */}
            <Link href="/products" className="hidden xl:block">
              <button className="absolute top-0 bottom-0 my-auto -left-20 group flex items-center justify-center p-4 group bg-gray-100 rounded-full w-10 h-10 hover:bg-orange">
                <ChevronLeftIcon
                  className="block h-6 w-6 text-gray-500 cursor-pointer flex-shrink-0 group-hover:text-white"
                  aria-hidden="true"
                />
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-0 sm:gap-x-16">
            <div className="flex flex-col space-y-5 col-span-6 lg:col-span-8">
              <p className="mb-12 text-gray-900 font-light flex flex-col space-y-3">
                {product?.description}
              </p>
            </div>

            <div className="flex flex-col space-y-8 col-span-6 lg:col-span-4">
              {/* thumbnail */}
              <div className="flex flex-col items-center sm:items-start">
                <Image
                  src={`/images/${product?.image}`}
                  alt="thumbnail"
                  width={400}
                  height={600}
                  className="rounded-lg w-56"
                />
              </div>

              {/* price */}
              <div className="flex flex-col space-y-2 items-center sm:items-start justify-center">
                <div className="flex space-x-4">
                  <p className="text-gray-900 font-bold text-2xl">
                    ${product?.price}
                  </p>
                  <p className="text-orange bg-orange-100 rounded-md px-2 font-bold text-sm flex items-center justify-center">
                    50%
                  </p>
                </div>
                <p className="text-gray-400 line-through">
                  {product && product.price * 2}
                </p>
              </div>

              {/* add to cart button */}
              <div className="flex space-x-2 items-start justify-center sm:justify-start">
                <QuantityButton
                  quantity={itemQuantity}
                  setQuantity={setItemQuantity}
                />

                <button
                  className={clsx(
                    "flex items-center justify-center space-x-3 rounded-md px-6 py-2 bg-orange hover:bg-opacity-80",
                    itemQuantity === 0
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  )}
                  onClick={addItemToCart}
                  disabled={itemQuantity === 0}
                >
                  {loading ? (
                    <Image
                      src="/images/spinner.svg"
                      alt="loading"
                      width={16}
                      height={16}
                    />
                  ) : (
                    <ShoppingCartIcon
                      className="block h-4 w-4 text-white"
                      aria-hidden="true"
                    />
                  )}
                  <span className="text-white font-bold">
                    {productIsInCart ? "Update cart" : "Add to cart"}
                  </span>
                </button>
                <ToastNotification />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
