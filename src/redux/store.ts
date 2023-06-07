import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/redux/slices/cartSlice";
import userReducer from "@/redux/slices/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;