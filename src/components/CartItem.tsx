import Image from "next/image";
import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import ColumnItem from "@/components/ColumnItem";
import { QuantityButton } from "@/components/Buttons";
import { Product } from "@/types";
import {
  addToCart,
  loadingCart,
  removeFromCart,
} from "@/redux/slices/cartSlice";

interface CartItemProps {
  product: Product;
}
const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const dispatch = useDispatch();
  const [itemQuantity, setItemQuantity] = useState(product.quantity);

  // change item quanity in cart
  useEffect(() => {
    dispatch(loadingCart(true));
    dispatch(addToCart({ ...product, quantity: itemQuantity }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemQuantity]);

  const { price, quantity, title, image } = product;

  return (
    <div className="border-b border-gray-200 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 py-6">
      <div className="flex items-center justify-start space-x-3 col-span-2">
        <div className="flex items-center justify-start">
          <Image
            src={`/images/${image}`}
            width={100}
            height={150}
            alt="thumbnail"
            className="rounded-md"
          />
        </div>
        <div className="text-gray-900 text-left">
          <p className="text-gray-900">{title}</p>
          <p className="text-orange text-sm">J.K. Rowling</p>
          <div className="flex lg:hidden items-center justify-start mt-2">
            <span className="text-gray-600">{`$${price}`}</span>
            <span className="text-gray-600 text-sm px-1">x</span>
            <span className="text-gray-600">{quantity}</span>
            <span className="text-gray-900 pl-2 font-bold">{`$${(
              quantity * price
            )
              .toFixed(2)
              .toLocaleString()}`}</span>
          </div>
        </div>
      </div>

      {/* price  */}
      <div className="hidden lg:flex items-center justify-start font-bold h-full">
        <span className="text-gray-700">$</span>
        <span className="text-gray-900">{price}</span>
      </div>

      {/* quantity  */}
      <div className="hidden sm:block">
        <ColumnItem>
          <QuantityButton
            quantity={itemQuantity}
            setQuantity={setItemQuantity}
          />
        </ColumnItem>
      </div>

      {/* total price  */}
      <div className="hidden lg:block">
        <ColumnItem>
          <div className="flex items-center justify-start font-bold">
            <span className="text-gray-700">$</span>
            <span className="text-gray-900">
              {(quantity * price).toFixed(2).toLocaleString()}
            </span>
          </div>
        </ColumnItem>
      </div>

      {/* remove item   */}
      <div className="flex items-center justify-end h-full pr-4">
        <button
          className="group rounded-full bg-gray-100 p-2 hover:bg-red-500"
          onClick={() => {
            dispatch(loadingCart(true));
            dispatch(removeFromCart(product.id));
            dispatch(loadingCart(false));
          }}
        >
          <XMarkIcon className="h-4 w-4 text-gray-900 group-hover:text-white" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
