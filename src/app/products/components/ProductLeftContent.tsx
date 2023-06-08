import { Product } from "@/types";

interface ProductLeftContentProps {
  product: Product | null;
}

const ProductLeftContent: React.FC<ProductLeftContentProps> = ({ product }) => {
  return (
    <div className="flex flex-col space-y-5 col-span-6 lg:col-span-8">
      <p className="mb-12 text-gray-900 font-light flex flex-col space-y-3">
        {product?.description}
      </p>
    </div>
  );
};

export default ProductLeftContent;
