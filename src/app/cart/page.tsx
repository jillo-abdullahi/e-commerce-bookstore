"use client";

import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import CartContainer from "@/containers/CartContainer";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import BackToProducts from "@/components/BackToProducts";
import CartEmptyState from "@/components/CartEmptyState";

export default function CartPage() {
  const { productsInCart } = useSelector((state: RootState) => state.cart);
  const areItemsInCart = Object.keys(productsInCart).length > 0;
  return (
    <div className="container mx-auto pt-12 pb-24">
      {/* cart header  */}
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-2xl sm:text-4xl font-bold">Your cart</h1>
        {areItemsInCart && <BackToProducts text="Continue shopping" />}
      </div>

      {/* cart items and order summary */}
      {areItemsInCart ? <CartContainer /> : <CartEmptyState />}
    </div>
  );
}
