"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { RootState } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, loadingCart } from "@/redux/slices/cartSlice";
import { booksList, authorInfo } from "@/utils/constants";
import { Product } from "@/types";
import { isEmpty } from "lodash";
import {
  ToastNotification,
  emitterSettings,
} from "@/app/shared/ToastNotification";
import Link from "next/link";
import Product404State from "@/app/products/components/Product404State";
import ProductRightContent from "@/app/products/components/ProductRightContent";
import ProductLeftContent from "@/app/products/components/ProductLeftContent";

export default function ProductItemPage() {
  const dispatch = useDispatch();
  const { productsInCart } = useSelector((state: RootState) => state.cart);
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
            <ProductLeftContent product={product} />

            <ProductRightContent
              itemQuantity={itemQuantity}
              setItemQuantity={setItemQuantity}
              product={product}
              addItemToCart={addItemToCart}
              productIsInCart={productIsInCart}
            />

            <ToastNotification />
          </div>
        </>
      )}
    </div>
  );
}
