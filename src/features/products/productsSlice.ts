import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EStateGeneric } from "../../utils/general";
import { IProduct } from "../../utils/types";
import { createOneProduct, getAllDisabledProducts, getAllProducts, getAllProductTypes, getOneProductById, updateOneProduct } from "./productsApi";

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

export const getAllDisabledWines = createAsyncThunk(
  'products/getAllDisabledWines',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllDisabledProducts()
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const getAllWineTypes = createAsyncThunk(
  'products/getAllWineTypes',
  async (type: string, { rejectWithValue }) => {
    try {
      const response = await getAllProductTypes(type)
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

export const createWine = createAsyncThunk(
  'products/createWine',
  async (product: IProduct, { rejectWithValue }) => {
    try {
      const response = await createOneProduct(product)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const updateWine = createAsyncThunk(
  'products/updateWine',
  async (product: IProduct, { rejectWithValue }) => {
    try {
      const response = await updateOneProduct(product)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

interface ProductsState {
  wines: IProduct[],
  disabledWines: IProduct[],
  wineTypes: IProduct[],
  wine: IProduct,
  allWinesStatus: EStateGeneric,
  allDisabledWinesStatus: EStateGeneric,
  allWineTypesStatus: EStateGeneric,
  oneWineStatus: EStateGeneric
}

const initialState = {
  wines: [],
  wine: {},
  disabledWines: [],
  wineTypes: [],
  allWinesStatus: EStateGeneric.IDLE,
  allDisabledWinesStatus: EStateGeneric.IDLE,
  allWineTypesStatus: EStateGeneric.IDLE,
  oneWineStatus: EStateGeneric.IDLE,
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
      state.allWinesStatus = EStateGeneric.SUCCEEDED;
    })
    builder.addCase(getAllWines.pending, (state, action) => {
      state.allWinesStatus = EStateGeneric.PENDING;
    })
    builder.addCase(getAllWines.rejected, (state, action) => {
      state.allWinesStatus = EStateGeneric.FAILED;
    })



    builder.addCase(getAllDisabledWines.fulfilled, (state, action) => {
      state.disabledWines = action.payload;
      state.allWinesStatus = EStateGeneric.SUCCEEDED;
    })
    builder.addCase(getAllDisabledWines.pending, (state, action) => {
      state.allDisabledWinesStatus = EStateGeneric.PENDING;
    })
    builder.addCase(getAllDisabledWines.rejected, (state, action) => {
      state.allDisabledWinesStatus = EStateGeneric.FAILED;
    })


    
    builder.addCase(getAllWineTypes.fulfilled, (state, action) => {
      state.wineTypes = action.payload;
      state.allWineTypesStatus = EStateGeneric.SUCCEEDED;
    })
    builder.addCase(getAllWineTypes.pending, (state, action) => {
      state.allWineTypesStatus = EStateGeneric.PENDING;
    })
    builder.addCase(getAllWineTypes.rejected, (state, action) => {
      state.allWineTypesStatus = EStateGeneric.FAILED;
    })



    builder.addCase(getOneWine.fulfilled, (state, action) => {
      state.wine = action.payload;
      state.oneWineStatus = EStateGeneric.SUCCEEDED;
    })
    builder.addCase(getOneWine.pending, (state, action) => {
      state.oneWineStatus = EStateGeneric.PENDING;
    })
    builder.addCase(getOneWine.rejected, (state, action) => {
      state.oneWineStatus = EStateGeneric.FAILED;
    })



    builder.addCase(createWine.fulfilled, (state, action) => {
      state.wines = state.wines.concat(action.payload);
      state.allWinesStatus = EStateGeneric.SUCCEEDED;
    })
    builder.addCase(createWine.pending, (state, action) => {
      state.oneWineStatus = EStateGeneric.PENDING;
    })
    builder.addCase(createWine.rejected, (state, action) => {
      state.oneWineStatus = EStateGeneric.FAILED;
    })



    builder.addCase(updateWine.fulfilled, (state, action) => {
      state.wines = state.wines.map(w => {
        if (w.id === action.payload.id) 
          return { ...w, ...action.payload }
        else return w
      });
      state.allWinesStatus = EStateGeneric.SUCCEEDED;
    })
    builder.addCase(updateWine.pending, (state, action) => {
      state.oneWineStatus = EStateGeneric.PENDING;
    })
    builder.addCase(updateWine.rejected, (state, action) => {
      state.oneWineStatus = EStateGeneric.FAILED;
    })
  },
})

export default productsSlice.reducer

export const selectAllWines = (state) => state.products.wines;
export const selectAllDisabledWines = (state) => state.products.disabledWines;
export const selectAllWineTypes = (state) => state.products.wineTypes;
export const selectOneWine = (state) => state.products.wine;

export const selectAllWinesStatus = (state) => state.products.allWinesStatus;
export const selectAllDisabedWinesStatus = (state) => state.products.allDisabledWinesStatus;
export const selectAllWineTypesStatus = (state) => state.products.allWineTypesStatus;
export const selectOneWineStatus = (state) => state.products.oneWineStatus;