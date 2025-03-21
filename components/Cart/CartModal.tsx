import React, { useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import CartImage from './CartImage'
import CourseCard from './CourseCard'
import { useDispatch, useSelector } from 'react-redux'
import { SetCartData } from '@/utils/Redux/Slice/CartSlice'
import { fetchUserCart } from '@/functions/Cart/GetUserCart'
import { RootState } from '@/utils/Redux/Store'
import Checkout from './Checkout'
const CartModal = () => {
  const Cart = useSelector((state: RootState) => state.Cart)
  const User = useSelector((state: RootState) => state.user)
  const Dispatch = useDispatch()
  useEffect(() => {
    const GetCartCoursesOfUser = async () => {
      const CartData = await fetchUserCart(User._id)
      if (CartData) {
        Dispatch(SetCartData(CartData))
      }
    }
    GetCartCoursesOfUser()
  }, [User._id, Dispatch])
  return (
    <Dialog>
      <DialogTrigger>
        <div className="relative">
          <CartImage />
          <div className="absolute top-0 right-0 bg-indigo-600 text-white rounded-full p-1 text-xs">
            {Cart.Course.length}
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-6xl w-full px-4 sm:px-6 md:px-12 bg-gray-100 rounded-lg shadow-xl transform transition-all duration-300">
        <DialogHeader className="bg-indigo-600 text-white p-6 rounded-t-lg">
          <DialogTitle className="text-xl font-semibold">Your Cart</DialogTitle>
        </DialogHeader>
        {Cart.Course.length > 0 ? (
          <div className="space-y-6 mt-4 h-[50vh] p-4 overflow-y-auto w-full">
            {Cart.Course.map((course, index) => (
              <CourseCard course={course} key={index} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 py-8">Your cart is empty.</p>
        )}
        {Cart.Course.length > 0 && <Checkout />}
      </DialogContent>
    </Dialog>
  )
}
export default CartModal
