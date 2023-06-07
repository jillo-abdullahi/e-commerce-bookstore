import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/state/slices/cartSlice";
import userReducer from "@/state/slices/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
