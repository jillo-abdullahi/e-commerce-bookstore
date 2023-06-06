import ProductTile from "@/components/ProductTile";
import { booksList } from "@/utils/constants";

export default function ProductsPage() {
  return (
    <div className="container mx-auto pt-12 pb-24">
      <h1 className="text-4xl font-bold mb-12">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* ProductTile */}
        {booksList.map((product, idx) => (
          <ProductTile key={idx} product={product} />
        ))}
      </div>
    </div>
  );
}
