import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import { RootState } from '../../store';
import { Product } from '../../types';

interface CartSlice {
  products: Product[]
}

const initState: CartSlice = {
  products: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products = [...state.products, action.payload]
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter((product) => product.id !== action.payload)
    },
    clearCart: (state) => {   
      state.products = []
    }
  }
})

export const {addProduct, removeProduct, clearCart} = cartSlice.actions
export const selectCartProducts = (state: RootState) => state.cartReducer.products;
export default cartSlice.reducer