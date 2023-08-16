import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/products/productsSlice';
import itemReducer from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    item: itemReducer
  },
});
