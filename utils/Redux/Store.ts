import { configureStore } from '@reduxjs/toolkit'
import { CartSlice } from './Slice/CartSlice'

const Store = configureStore({
  reducer: {
    Cart: CartSlice.reducer,
    // user: UserSlice.reduQcer, // Add UserSlice reducer here
    // Select: SelectSlice.reducer,
    // location: Location_Slice.reducer,
    // sort: SortSlice.reducer,
    // Flag: Flag_Slice.reducer,
    // Chat: ChatSlice.reducer,
    // Kpi: UserKpiSlice.reducer,
    // KpiList: KpiListSlice.reducer,
    // UserSelect: userSlice.reducer,
    // userTaskSlice: UserTasksSlice.reducer,
  },
})

export default Store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>
// Inferred type: {some: SomeStateType}
export type AppDispatch = typeof Store.dispatch
