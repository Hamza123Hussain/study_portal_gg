import { Cart } from '@/utils/CartInterface'
import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
const initialState: Cart[] = []
export const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    SetCartData: (state, action) => {
      state = action.payload
    },
    AddToCart: (state, action) => {
      const DuplicateCourse = state.filter((cart) =>
        cart.Course.filter(
          (course) => course.CourseID === action.payload.CourseID
        )
      )
      if (DuplicateCourse.length > 0) toast.error('Course already in cart') // Show toast message
      state.push(action.payload)
    },
    RemoveFromCart: (state, action) => {
      state = state.filter((cart) =>
        cart.Course.filter(
          (course) => course.CourseID !== action.payload.CourseID
        )
      )
    },
  },
})
export const { SetCartData, AddToCart, RemoveFromCart } = CartSlice.actions
