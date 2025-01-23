import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { CartSlice } from './Slice/CartSlice'

// Combine all reducers into one root reducer
const rootReducer = combineReducers({
  Cart: CartSlice.reducer,
  // Add additional reducers here
  // user: UserSlice.reducer,
  // location: Location_Slice.reducer,
  // sort: SortSlice.reducer,
})

// Configure the store
const Store = configureStore({
  reducer: rootReducer, // Pass the combined reducers
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializability checks if needed
    }),
  devTools: true, // Enable Redux DevTools by default
})

export default Store

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof Store.dispatch
