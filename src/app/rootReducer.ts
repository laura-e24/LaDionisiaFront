import { combineReducers } from "@reduxjs/toolkit";
import productsSlice from "../features/products/productsSlice";
import cartSlice from "../features/products/cartSlice";

export const rootReducer = combineReducers({
  products: productsSlice,
  cart: cartSlice
})

export type RootState = ReturnType<typeof rootReducer>;