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
      console.log("Adding to cart:", action.payload, state.data);
      const newItem = {
        name: action.payload.name,
        price: action.payload.price,
      };
      state.data.push(newItem);
      console.log("after to cart:", state.data);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
