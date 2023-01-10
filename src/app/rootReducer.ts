import { combineReducers } from "@reduxjs/toolkit";
import testingSlice from "../features/testSlice"

export const rootReducer = combineReducers({
  testing: testingSlice
})

export type RootState = ReturnType<typeof rootReducer>;