import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item, Product } from 'types/features';

interface CartState {
  cartItems: Product[]
}

const initialState: CartState = {
  cartItems: []
} as const;

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (
      state,
      action: PayloadAction<Item>
    ) => {
      console.log(state.cartItems)
      state.cartItems = [action.payload]
    }
  },
});


export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;