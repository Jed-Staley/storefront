import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories';
import productsReducer from './products';
import activeCategoryReducer from './active-category';
import cartReducer from './cart';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    activeCategory: activeCategoryReducer,
    cart: cartReducer,
  }
});

export default store;
