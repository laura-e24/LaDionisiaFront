import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { rootReducer } from './rootReducer'

export const store = configureStore({
  reducer: rootReducer,
  devTools: true
})

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// Export a hook that can be reused to resolve types
export const useAppDispatch = () => useDispatch<AppDispatch>()