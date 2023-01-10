import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StateGeneric } from "../utils/general";
import { testingRedux } from "./testApi";

export const getCatFact = createAsyncThunk(
  'testing/getCatFact',
  async (_, { rejectWithValue }) => {
    try {
      const response = await testingRedux()
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

interface TestingState {
  facts: []
  status: StateGeneric
}

const initialState = {
  facts: [],
  status: StateGeneric.IDLE,
} as TestingState

const testingSlice = createSlice({
  name: 'testing',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getCatFact.fulfilled, (state, action) => {
      state.facts = action.payload;
      state.status = StateGeneric.SUCCEEDED;
    })
    builder.addCase(getCatFact.pending, (state, action) => {
      state.status = StateGeneric.PENDING;
    })
    builder.addCase(getCatFact.rejected, (state, action) => {
      state.status = StateGeneric.FAILED;
    })
  },
})

export default testingSlice.reducer

export const selectFacts = (state) => state.testing.facts;
export const selectFactsStatus = (state) => state.testing.status;