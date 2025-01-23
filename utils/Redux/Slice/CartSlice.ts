import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import { Cart, Course } from '@/utils/CartInterface'

const initialState: Cart = {
  Course: [],
  totalOptions: 0,
}

export const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    SetCartData: (state, action: PayloadAction<Cart>) => {
      return action.payload // Return new state with updated cart data
    },
    AddToCart: (state, action: PayloadAction<Course>) => {
      state.Course.push(action.payload) // Add course to cart
      state.totalOptions += 1
    },
    RemoveFromCart: (state, action: PayloadAction<string>) => {
      state.Course = state.Course.filter(
        (course) => course.CourseID !== action.payload
      )
      state.totalOptions -= 1
    },
  },
})

export const { SetCartData, AddToCart, RemoveFromCart } = CartSlice.actions
export default CartSlice.reducer
