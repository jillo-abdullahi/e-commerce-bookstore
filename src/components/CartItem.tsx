import Image from "next/image";
import { XCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import ColumnItem from "@/components/ColumnItem";
import { QuantityButton } from "@/components/Buttons";

const CartItem = () => {
  return (
    <div className="border-b border-gray-200 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 py-6">
      <div className="flex items-center justify-start space-x-3 col-span-2">
        <div className="flex items-center justify-start">
          <Image
            src="/images/book-1.jpeg"
            width={100}
            height={150}
            alt="thumbnail"
            className="rounded-md"
          />
        </div>
        <div className="text-gray-900 text-left">
          <p className="text-gray-900">
            Harry Potter and the Chamber of Secrets
          </p>
          <p className="text-orange text-sm">J.K. Rowling</p>
          <div className="flex lg:hidden items-center justify-start font-bold">
            <span className="text-gray-700">$</span>
            <span className="text-gray-900">19.99</span>
          </div>
        </div>
      </div>

      {/* price  */}
      <div className="hidden lg:flex items-center justify-start font-bold h-full">
        <span className="text-gray-700">$</span>
        <span className="text-gray-900">19.99</span>
      </div>

      {/* quantity  */}
      <div className="hidden sm:block">
        <ColumnItem>
          <QuantityButton quantity={1} setQuantity={() => {}} />
        </ColumnItem>
      </div>

      {/* total price  */}
      <div className="hidden lg:block">
        <ColumnItem>
          <div className="flex items-center justify-start font-bold">
            <span className="text-gray-700">$</span>
            <span className="text-gray-900">{19.99 * 3}</span>
          </div>
        </ColumnItem>
      </div>

      {/* remove item   */}
      <div className="flex items-center justify-end h-full pr-4">
        <button className="group rounded-full bg-gray-100 p-2 hover:bg-red-500">
          <XMarkIcon className="h-4 w-4 text-gray-900 group-hover:text-white" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
