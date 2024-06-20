import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const fetchProductsByCategory = createAsyncThunk(
  'products/fetchByCategory',
  async (category) => {
    const response = await axios.get(`${SERVER_URL}/category/${category}`);
    return response.data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
