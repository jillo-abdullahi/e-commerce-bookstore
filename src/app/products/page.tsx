import ProductTile from "@/app/products/components/ProductTile";
import { booksList } from "@/utils/constants";
import { authorInfo } from "@/utils/constants";

export default function ProductsPage() {
  return (
    <div className="container mx-auto pt-12 pb-24">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">Products</h1>
      <h2 className="font-light mb-10">Available books by {authorInfo.name}</h2>

      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* book tiles */}
          {Object.values(booksList).map((book) => (
            <ProductTile key={book.id} product={book} />
          ))}
        </div>
      </div>
    </div>
  );
}
