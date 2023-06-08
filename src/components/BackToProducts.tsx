import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const BackToProducts: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Link
      href="/products"
      className="flex items-center justify-center rounded-md border border-gray-300 hover:bg-orange hover:border-orange transition-all duration-200 ease-linear group space-x-2 py-2 px-4"
    >
      <ArrowLeftIcon className="h-4 w-4 text-gray-900 group-hover:text-white" />
      <button className="text-gray-900 group-hover:text-white text-sm font-bold">
        {text}
      </button>
    </Link>
  );
};

export default BackToProducts;
