import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StateGeneric } from "../../utils/general";
import { getAllProducts, getOneProductById } from "./productsApi";

export const getAllWines = createAsyncThunk(
  'products/getAllWines',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllProducts()
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const getOneWine = createAsyncThunk(
  'products/getOneWine',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await getOneProductById(id)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

interface ProductsState {
  wines: [],
  wine: {},
  allWinesStatus: StateGeneric,
  oneWineStatus: StateGeneric
}

const initialState = {
  wines: [],
  wine: {},
  oneWineStatus: StateGeneric.IDLE,
  allWinesStatus: StateGeneric.IDLE,
} as ProductsState

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getAllWines.fulfilled, (state, action) => {
      state.wines = action.payload;
      state.allWinesStatus = StateGeneric.SUCCEEDED;
    })
    builder.addCase(getAllWines.pending, (state, action) => {
      state.allWinesStatus = StateGeneric.PENDING;
    })
    builder.addCase(getAllWines.rejected, (state, action) => {
      state.allWinesStatus = StateGeneric.FAILED;
    })



    builder.addCase(getOneWine.fulfilled, (state, action) => {
      state.wine = action.payload;
      state.oneWineStatus = StateGeneric.SUCCEEDED;
    })
    builder.addCase(getOneWine.pending, (state, action) => {
      state.oneWineStatus = StateGeneric.PENDING;
    })
    builder.addCase(getOneWine.rejected, (state, action) => {
      state.oneWineStatus = StateGeneric.FAILED;
    })
  },
})

export default productsSlice.reducer

export const selectOneWine = (state) => state.products.wine;
export const selectAllWines = (state) => state.products.wines;
export const selectAllWinesStatus = (state) => state.products.allWinesStatus;
export const selectOneWineStatus = (state) => state.products.oneWineStatus;