import React, { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import CartImage from './CartImage'
import { Cart } from '@/utils/CartInterface'
import { fetchUserCart } from '@/functions/Cart/GetUserCart'
import CourseCard from './CourseCard'
const CartModal = ({ userId }: { userId: string }) => {
  const [cart, setCart] = useState<Cart | null>(null)
  const GetCartCoursesOfUser = async () => {
    const CartData = await fetchUserCart(userId)
    if (CartData) {
      setCart(CartData)
    }
  }
  useEffect(() => {
    GetCartCoursesOfUser()
  }, [userId])
  return (
    <Dialog>
      <DialogTrigger>
        <div className="relative">
          <CartImage />
          <div className="absolute top-0 right-0 bg-indigo-600 text-white rounded-full p-1 text-xs">
            {cart?.Course.length}
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-5xl w-full px-4 sm:px-6 md:px-12 bg-gray-100 rounded-lg shadow-xl transform transition-all duration-300">
        <DialogHeader className="bg-indigo-600 text-white p-6 rounded-t-lg">
          <DialogTitle className="text-xl font-semibold">Your Cart</DialogTitle>
        </DialogHeader>
        {cart ? (
          <div className=" flex flex-col gap-2">
            <div className="space-y-6 mt-4 h-[50vh] overflow-y-auto w-full">
              {cart.Course.map((course) => (
                <CourseCard course={course} key={course.CourseID} />
              ))}
            </div>
            <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
              <p className="text-sm text-gray-600">
                Total number of courses: {cart.totalOptions}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600 py-8">Your cart is empty.</p>
        )}
      </DialogContent>
    </Dialog>
  )
}
export default CartModal
