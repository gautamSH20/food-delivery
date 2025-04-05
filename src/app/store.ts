import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "../features/Cart/cartSlice";

export const store = configureStore({
  reducer: {
    Cart: cartSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
