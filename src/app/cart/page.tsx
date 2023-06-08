"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import CartItem from "@/components/CartItem";
import CartSummary from "@/components/CartSummary";


export default function CartPage() {
  return (
    <div className="container mx-auto pt-12 pb-24">
      {/* cart header  */}
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-2xl sm:text-4xl font-bold">Your cart</h1>

        <Link
          href="/products"
          className="flex items-center justify-center rounded-md border border-gray-300 hover:bg-orange hover:border-orange transition-all duration-200 ease-linear group space-x-2 py-2 px-4"
        >
          <ArrowLeftIcon className="h-4 w-4 text-gray-900 group-hover:text-white" />
          <button className="text-gray-900 group-hover:text-white text-sm font-bold">
            Continue shopping
          </button>
        </Link>
      </div>

      {/* cart items */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 sm:gap-x-6">
        <div className="mb-6 lg:col-span-8">
          <div className="hidden sm:grid grid-cols-6 gap-x-4 py-2 border-b border-gray-200">
            <div className="col-span-3 lg:col-span-2 text-orange">Title</div>
            <div className="text-orange hidden lg:block">Price</div>
            <div className="text-orange">Quantity</div>
            <div className="text-orange hidden lg:block">Total Price</div>
            <div className="text-orange text-left"></div>
          </div>
          <CartItem />
          <CartItem />
  
        </div>
        {/* cart summary */}
        <div className="lg:col-span-4">
          <CartSummary />
        </div>
      </div>
    </div>
  );
}
