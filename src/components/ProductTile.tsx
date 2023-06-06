import { Product } from "@/types";
import Image from "next/image";

const ProductTile = ({ product }: { product: Product }) => {
  return (
    <button className="rounde">
      <div className="">
        <Image
          src={`/images/${product.image}`}
          alt={product.title}
          width={400}
          height={600}
          className="rounded-lg"
        />
      </div>
    </button>
  );
};

export default ProductTile;
