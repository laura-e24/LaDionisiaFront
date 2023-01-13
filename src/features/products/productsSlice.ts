import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StateGeneric } from "../../utils/general";
import { IProduct } from "../../utils/types";
import { createOneProduct, getAllDisabledProducts, getAllProducts, getAllProductTypes, getOneProductById, getAllProductsByContry, updateOneProduct } from "./productsApi";

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
export const getAllWinesByContry = createAsyncThunk(
  'products/getAllWinesByContry',
  async (contry: string, { rejectWithValue }) => {
    try {
      const response = await getAllProductsByContry(contry)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

interface ProductsState {
  wines: IProduct[],
  winesContry: IProduct[],
  disabledWines: IProduct[],
  wineTypes: IProduct[],
  wine: IProduct,
  allWinesStatus: StateGeneric,
  allWinesContryStatus: StateGeneric,
  allDisabledWinesStatus: StateGeneric,
  allWineTypesStatus: StateGeneric,
  oneWineStatus: StateGeneric
}

const initialState = {
  wines: [],
  wine: {},
  winesContry: [],
  disabledWines: [],
  wineTypes: [],
  allWinesStatus: StateGeneric.IDLE,
  allWinesContryStatus: StateGeneric.IDLE,
  allDisabledWinesStatus: StateGeneric.IDLE,
  allWineTypesStatus: StateGeneric.IDLE,
  oneWineStatus: StateGeneric.IDLE,
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



    builder.addCase(getAllDisabledWines.fulfilled, (state, action) => {
      state.disabledWines = action.payload;
      state.allWinesStatus = StateGeneric.SUCCEEDED;
    })
    builder.addCase(getAllDisabledWines.pending, (state, action) => {
      state.allDisabledWinesStatus = StateGeneric.PENDING;
    })
    builder.addCase(getAllDisabledWines.rejected, (state, action) => {
      state.allDisabledWinesStatus = StateGeneric.FAILED;
    })


    
    builder.addCase(getAllWineTypes.fulfilled, (state, action) => {
      state.wineTypes = action.payload;
      state.allWineTypesStatus = StateGeneric.SUCCEEDED;
    })
    builder.addCase(getAllWineTypes.pending, (state, action) => {
      state.allWineTypesStatus = StateGeneric.PENDING;
    })
    builder.addCase(getAllWineTypes.rejected, (state, action) => {
      state.allWineTypesStatus = StateGeneric.FAILED;
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



    builder.addCase(createWine.fulfilled, (state, action) => {
      state.wines = state.wines.concat(action.payload);
      state.allWinesStatus = StateGeneric.SUCCEEDED;
    })
    builder.addCase(createWine.pending, (state, action) => {
      state.oneWineStatus = StateGeneric.PENDING;
    })
    builder.addCase(createWine.rejected, (state, action) => {
      state.oneWineStatus = StateGeneric.FAILED;
    })



    builder.addCase(updateWine.fulfilled, (state, action) => {
      state.wines = state.wines.map(w => {
        if (w.id === action.payload.id) 
          return { ...w, ...action.payload }
        else return w
      });
      state.allWinesStatus = StateGeneric.SUCCEEDED;
    })
    builder.addCase(updateWine.pending, (state, action) => {
      state.oneWineStatus = StateGeneric.PENDING;
    })
    builder.addCase(updateWine.rejected, (state, action) => {
      state.oneWineStatus = StateGeneric.FAILED;
    })



    builder.addCase(getAllWinesByContry.fulfilled, (state, action) => {
      state.winesContry = action.payload;
      state.allWinesContryStatus = StateGeneric.SUCCEEDED;
    })
    builder.addCase(getAllWinesByContry.pending, (state, action) => {
      state.allWinesContryStatus = StateGeneric.PENDING;
    })
    builder.addCase(getAllWinesByContry.rejected, (state, action) => {
      state.allWinesContryStatus = StateGeneric.FAILED;
    })
  },
})

export default productsSlice.reducer

export const selectAllWines = (state) => state.products.wines;
export const selectAllDisabledWines = (state) => state.products.disabledWines;
export const selectAllWineTypes = (state) => state.products.wineTypes;
export const selectOneWine = (state) => state.products.wine;
export const selectAllWinesByContry = (state) => state.products.winesContry;


export const selectAllWinesStatus = (state) => state.products.allWinesStatus;
export const selectAllWinesContryStatus = (state) => state.products.allWinesContryStatus;
export const selectAllDisabedWinesStatus = (state) => state.products.allDisabledWinesStatus;
export const selectAllWineTypesStatus = (state) => state.products.allWineTypesStatus;
export const selectOneWineStatus = (state) => state.products.oneWineStatus;