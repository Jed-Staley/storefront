import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchProductsByCategory } from './products';
import { v4 as uuidv4 } from 'uuid';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ product, category }, { dispatch }) => {
    const response = await axios.post(`${SERVER_URL}/cart/${product._id}`);
    dispatch(fetchProductsByCategory(category));
    return { ...response.data, cartId: uuidv4() };
  }
);

export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async ({ cartId, productId, categories, activeCategory }, { dispatch }) => {
    await axios.delete(`${SERVER_URL}/cart/${productId}`);
    if (categories.includes(activeCategory)) {
      dispatch(fetchProductsByCategory(activeCategory));
    }
    return cartId;
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    isVisible: false,
  },
  reducers: {
    toggleCart: (state) => {
      state.isVisible = !state.isVisible;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.cartId !== action.payload);
      });
  },
});

export const { toggleCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
