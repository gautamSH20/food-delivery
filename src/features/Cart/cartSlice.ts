import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItems {
  name: string;
  price: number;
}

const initialState = {
  data: [] as CartItems[],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItems>) => {
      console.log("Adding to cart:", action.payload, state.data);

      state.data.push(action.payload);
      console.log("after to cart:", state.data);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
