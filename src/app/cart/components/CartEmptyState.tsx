import Image from "next/image";
import BackToProducts from "@/app/shared/BackToProducts";

const CartEmptyState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 pt-24">
      <Image
        src="/images/icon-empty.svg"
        alt="empty cart"
        width={48}
        height={48}
      />
      <p className="text-lg font-bold">Your cart is empty</p>
      <BackToProducts text="Start shopping" />
    </div>
  );
};

export default CartEmptyState;
