import { createSlice } from '@reduxjs/toolkit';
import { loadCategories } from '../load-products';

const initialState = {
  categories: loadCategories(),
  activeCategory: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
});

export const { selectCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
