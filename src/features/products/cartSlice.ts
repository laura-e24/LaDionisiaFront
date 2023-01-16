import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EStateGeneric, rateGen } from "../../utils/general";
import { IProduct, IProductCart } from "../../utils/types";
const productHardCoded = {
  "id": 12,
  "wine": "Estiba Reservada",
  "winery": "Catena Zapata",
  "type": "reds",
  "year": 1994,
  "country": "Argentina",
  "region": "Agrelo",
  "rating": 9,
  "image": "https://images.vivino.com/thumbs/Yt464jw0QS-ugF7ZQEbE2Q_pb_x300.png",
  "description": "The wineries Catena Zapata are located in the valleys of the Agrelo suitable for the cultivation of wine Estiba Reservada, producing privileged fruits for the elaboration of a good wine reds . Made in Argentina (DRINKING ALCOHOLIC BEVERAGES IN EXCESS IS HARMFUL)",
  "disabled": false,
  "featured": false,
  "onSale": false,
  "totalSalesCurrent": null,
  "stock": null,
  "createdAt": "2023-01-12T18:58:32.235Z",
  "updatedAt": "2023-01-12T18:58:32.235Z",
  "deletedAt": null
}
interface CartState {
  cart: IProductCart[],
  display: boolean,
  totalSell: number,
  subTotal: number[]
}

const initialState = {
  cart: [],
  totalSell: 0,
  display: false,
  subTotal: []
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
      console.log(state.cart)
    },
    displayCart: (state, action) => {
      state.display = !state.display
    },
    removeAllProducts: (state) => {
      state.cart = []
    },
    totalPrice: (state, action) => {
      action.payload.filter(e => {
        state.totalSell += e
      })
    },
    setSubtotalArray: (state, action) => {
      state.subTotal = state.subTotal.concat(action.payload)
    }

  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
  },
})

export default cartSlice.reducer

export const selectCart = (state) => state.cart.cart;
export const selectDisplay = (state) => state.cart.display;


export const {
  removeProduct,
  addNewProduct,
  displayCart,
  removeAllProducts
} = cartSlice.actions;