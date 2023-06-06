import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

const ProductTile = ({ product }: { product: Product }) => {
  const handleProductClick = () => {
    // open the product page
  };
  return (
    <Link href={`/products/${product.id}`}>
      <div className="">
        <Image
          src={`/images/${product.image}`}
          alt={product.title}
          width={400}
          height={600}
          className="rounded-lg"
        />
      </div>
    </Link>
  );
};

export default ProductTile;
