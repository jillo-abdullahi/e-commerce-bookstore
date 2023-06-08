import clsx from "clsx";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { QuantityButton } from "@/components/Buttons";
import { Product } from "@/types";

interface ProductRightContentProps {
  itemQuantity: number;
  setItemQuantity: React.Dispatch<React.SetStateAction<number>>;
  product: Product | null;
  addItemToCart: () => void;
  productIsInCart: boolean;
}

const ProductRightContent: React.FC<ProductRightContentProps> = ({
  itemQuantity,
  setItemQuantity,
  product,
  addItemToCart,
  productIsInCart,
}) => {
  const { loading } = useSelector((state: RootState) => state.cart);
  return (
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
          <p className="text-gray-900 font-bold text-2xl">${product?.price}</p>
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
        <QuantityButton quantity={itemQuantity} setQuantity={setItemQuantity} />

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
      </div>
    </div>
  );
};

export default ProductRightContent;
