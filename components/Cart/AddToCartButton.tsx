import { AddCourseToCart } from '@/functions/Cart/AddCourseToCart'
import { Course } from '@/utils/CartInterface'
import { AddToCart } from '@/utils/Redux/Slice/CartSlice'
import { RootState } from '@/utils/Redux/Store'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
const AddToCartButton = ({ _id }: { _id: string }) => {
  const UserID = useSelector((state: RootState) => state.user._id)
  const Dispatch = useDispatch()
  const AddCourse = async () => {
    console.log('THIS IS THE COURSE ID', _id)
    const CourseData: Course = await AddCourseToCart(UserID, _id)
    if (CourseData) {
      Dispatch(AddToCart(CourseData))
    }
  }
  return (
    <button
      onClick={AddCourse}
      className="flex items-center justify-center w-full py-3 px-6 font-medium text-lg rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
    >
      <FaShoppingCart className="mr-3 text-xl" />
      Add Course To Cart
    </button>
  )
}
export default AddToCartButton
