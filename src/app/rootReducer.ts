import { combineReducers } from "@reduxjs/toolkit";
import productsSlice from "../features/products/productsSlice";
import cartSlice from "../features/products/cartSlice";
import commentsSlice from "../features/comments/commentsSlice";

export const rootReducer = combineReducers({
  products: productsSlice,
  cart: cartSlice,
  comments: commentsSlice
})

export type RootState = ReturnType<typeof rootReducer>;