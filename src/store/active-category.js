import { createSlice } from '@reduxjs/toolkit';

const activeCategorySlice = createSlice({
  name: 'activeCategory',
  initialState: '',
  reducers: {
    selectCategory: (state, action) => action.payload
  }
});

export const { selectCategory } = activeCategorySlice.actions;
export default activeCategorySlice.reducer;
