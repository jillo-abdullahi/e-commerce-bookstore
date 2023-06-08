import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface ProductTileProps {
  product: Product;
}
const ProductTile: React.FC<ProductTileProps> = ({ product }) => {
  const { image, id, price } = product;
  return (
    <Link href={`/products/${id}`}>
      <div className="rounded-lg border-orange card shadow overflow-hidden max-w-[400px]">
        <Image
          src={`/images/${image}`}
          alt={product.title}
          width={400}
          height={600}
        />
        <div className="p-4 space-y-1">
          <p className="text-gray-900 text-sm h-10">{product.title}</p>
          <p className="text-orange text-sm">{`$${price}`}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductTile;
