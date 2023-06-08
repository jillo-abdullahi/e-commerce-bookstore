import Image from "next/image";
import BackToProducts from "@/app/shared/BackToProducts";

const Product404State: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 pt-24">
      <Image
        src="/images/icon-404.svg"
        alt="empty cart"
        width={200}
        height={200}
      />
      <p className="text-lg font-bold">Product not found</p>
      <BackToProducts text="Back" />
    </div>
  );
};

export default Product404State;
