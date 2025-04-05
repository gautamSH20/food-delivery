import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItems {
  name: string | null;
  price: number | null;
  id?: string;
}

interface CartState {
  data: CartItems[];
}

const initialState: CartState = {
  data: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItems>) => {
      state.data.push({ ...action.payload });
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
