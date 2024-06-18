import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories';
import productsReducer from './products';
import activeCategoryReducer from './active-category';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    activeCategory: activeCategoryReducer
  }
});

export default store;
