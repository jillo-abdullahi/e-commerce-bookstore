import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { cartInitialState } from "@/redux/initialState";
import { CartItem } from "@/types";

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { id, quantity, price, image, title } = action.payload;
      const { productsInCart } = state;
      try {
        if (productsInCart[id]) {
          state.productsInCart[id].quantity = quantity;
        } else {
          state.productsInCart[id] = { id, quantity, price, image, title };
        }

        state.error = "";
      } catch (error) {
        state.error = "An error occurred while adding to cart";
      }
      return state;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      try {
        delete state.productsInCart[id];
        state.error = "";
      } catch (error) {
        state.error = "An error occurred while removing from cart";
      }
      return state;
    },
    loadingCart: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
      return state;
    },
  },
});

export const { addToCart, removeFromCart, loadingCart } = cartSlice.actions;

export default cartSlice.reducer;
