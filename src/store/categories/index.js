import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loadCategories } from '../load-products';

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const categories = await loadCategories();
  console.log('Categories fetched:', categories); // Log the fetched categories
  return categories;
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    activeCategory: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    selectCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { selectCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
