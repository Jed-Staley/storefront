import { createSlice } from '@reduxjs/toolkit';
import { loadProducts } from './load-products';

const initialState = loadProducts();

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
