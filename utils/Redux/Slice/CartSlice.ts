import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import { Cart, Course } from '@/utils/CartInterface'

const initialState: Cart = {
  Course: [],
  totalOptions: 0,
  _id: '',
  userId: '',
}

export const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    SetCartData: (state, action: PayloadAction<Cart>) => {
      return action.payload // Replace state with the new cart data
    },
    AddToCart: (state, action: PayloadAction<Course>) => {
      state.Course.push(action.payload) // Add course to cart
      state.totalOptions = state.Course.length
    },
    RemoveFromCart: (state, action: PayloadAction<string>) => {
      // Remove the course with the matching CourseID
      state.Course = state.Course.filter(
        (course) => course._id !== action.payload
      )
      state.totalOptions = state.Course.length
    },
  },
})

export const { SetCartData, AddToCart, RemoveFromCart } = CartSlice.actions
export default CartSlice.reducer
