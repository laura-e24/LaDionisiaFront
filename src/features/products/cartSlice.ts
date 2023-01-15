import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EStateGeneric, rateGen } from "../../utils/general";
import { IProduct, IProductCart } from "../../utils/types";

interface CartState {
  cart: IProductCart[],
  display: boolean,
}

const initialState = {
  cart: [],
  display: false,
} as CartState

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  
    removeProduct: (state, action) => {
      state.cart = state.cart.map(c => {
        if (c.id === action.payload.id) 
        return { ...c,  ...action.payload }
      })
    },
    addNewProduct: (state, action) => {
      state.cart = state.cart.concat(action.payload)
    },
    displayCart: (state, action) => {
      state.display = !state.display
    },
    removeAllProducts: (state) => {
      state.cart = []
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
  },
})

export default cartSlice.reducer

export const selectCart = (state) => state.products.cart;
export const selectDisplay = (state) => state.products.display;


export const {
  removeProduct,
  addNewProduct,
  displayCart,
  removeAllProducts
} = cartSlice.actions;