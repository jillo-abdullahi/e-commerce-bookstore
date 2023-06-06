"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { booksList, authorInfo } from "@/utils/constants";
import { Product } from "@/types";

export default function ProductItemPage() {
  const [product, setProduct] = useState<Product | null>(null);

  // todo: move this to the context API since we need this from the cart page as well
  const [quantity, setQuantity] = useState(1);
  const productId = parseInt(usePathname().split("/")[2]);

  useEffect(() => {
    // fetch product data from books list
    const product = booksList[productId];
    if (!product) {
      // todo: redirect to 404 page
      window.location.href = "/404";
    }
    setProduct(product);
  }, [productId]);

  return (
    <div className="container mx-auto max-w-[1015px] pt-12 pb-24">
      {/* title, author, description */}
      <div className="mb-12 w-full text-left space-y-2">
        <h1 className="uppercase text-orange font-bold">{authorInfo.name}</h1>
        <h2 className="text-2xl font-bold">{product?.title}</h2>
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
            <div className="isolate inline-flex rounded-md items-center">
              <button
                type="button"
                className="relative inline-flex items-center rounded-l-md bg-gray-100 px-3 py-2 font-semibold text-orange focus:z-10"
                onClick={() =>
                  setQuantity((prevState) =>
                    prevState >= 1 ? prevState - 1 : prevState
                  )
                }
              >
                -
              </button>
              <span className="text-center font-bold w-10 bg-gray-100 h-full py-2 ">
                {quantity}
              </span>
              <button
                type="button"
                className="relative -ml-px inline-flex items-center rounded-r-md  border-transparent bg-gray-100 px-3 py-2 font-semibold text-orange focus:z-10 flex-shrink-0"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <button className="flex items-center justify-center space-x-3 rounded-md px-6 py-2 bg-orange hover:bg-opacity-80">
              <ShoppingCartIcon
                className="block h-4 w-4 text-white"
                aria-hidden="true"
              />
              <span className="text-white font-bold">Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
