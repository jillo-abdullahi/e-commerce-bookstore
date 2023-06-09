import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const { productsInCart } = useSelector((state: RootState) => state.cart);

  const totalCost = Object.values(productsInCart)
    .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    .toLocaleString("en-US", { maximumFractionDigits: 2 });

  return (
    <>
      <div className="rounded-md flex flex-col border border-gray-200 overflow-hidden">
        <p className="font-bold text-lg bg-gray-100 px-6 py-4 border-b border-gray-200">
          Order summary
        </p>
        <div className="p-8 bg-gray-100 space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-gray-900">Subtotal</p>
            <p className="text-gray-900 font-bold">{`$${totalCost}`}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-900">Shipping</p>
            <p className="text-gray-900 font-bold">free</p>
          </div>
        </div>
        <div className="flex items-center justify-between px-6 bg-gray-200 py-4">
          <p className="text-lg font-bold">Total</p>
          <p className="text-lg font-bold">{`$${totalCost}`}</p>
        </div>

        {/* checkout button  */}
      </div>
      <button className="rounded-md px-6 py-4 bg-orange hover:bg-opacity-80 mt-2 w-full">
        <span className="text-white font-bold uppercase">checkout</span>
      </button>
    </>
  );
};

export default CartSummary;
