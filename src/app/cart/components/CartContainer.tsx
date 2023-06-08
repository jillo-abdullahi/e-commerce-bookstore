import CartItem from "@/app/cart/components/CartItem";
import CartSummary from "@/app/cart/components/CartSummary";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const CartContainer: React.FC = () => {
  const { productsInCart } = useSelector((state: RootState) => state.cart);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 sm:gap-x-6">
      <div className="mb-6 lg:col-span-8">
        <div className="hidden sm:grid grid-cols-6 gap-x-4 py-2 border-b border-gray-200">
          <div className="col-span-3 lg:col-span-2 text-orange">Title</div>
          <div className="text-orange hidden lg:block">Price</div>
          <div className="text-orange">Quantity</div>
          <div className="text-orange hidden lg:block">Total Price</div>
          <div className="text-orange text-left"></div>
        </div>

        {/* cart items */}
        {Object.values(productsInCart).map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
      {/* cart summary */}
      <div className="lg:col-span-4">
        <CartSummary />
      </div>
    </div>
  );
};

export default CartContainer;
