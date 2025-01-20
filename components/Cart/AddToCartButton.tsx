import { AddCourseToCart } from '@/functions/Cart/AddCourseToCart'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const AddToCartButton = ({ _id }: { _id: string }) => {
  const AddCourse = async () => {
    await AddCourseToCart('6t66t', _id)
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
