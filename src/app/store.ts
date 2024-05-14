import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./features/Cart/cartSlice"
import { setupListeners } from '@reduxjs/toolkit/query'
import { productsApi } from './service/dummyData'

export const store = configureStore({
  reducer: {
    cartReducer,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch