import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { rootReducer } from './rootReducer'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: false,
})
export const persistor = persistStore(store)
// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// Export a hook that can be reused to resolve types
export const useAppDispatch = () => useDispatch<AppDispatch>()