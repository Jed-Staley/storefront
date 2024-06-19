import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    isVisible: false,
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.unshift(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item, index) => index !== action.payload);
    },
    toggleCart: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { addToCart, removeFromCart, toggleCart } = cartSlice.actions;
export default cartSlice.reducer;
