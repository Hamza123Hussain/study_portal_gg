import React from 'react'
import { useRouter } from 'next/navigation'
import { FaShoppingCart } from 'react-icons/fa'
const Buttons = ({ _id }: { _id: string }) => {
  const Router = useRouter()
  return (
    <>
      {/* Card Footer */}
      <div className="px-6 py-4 bg-gray-100 text-center rounded-b-xl flex flex-col gap-4">
        {/* Add to Cart Button */}
        <button className="flex items-center justify-center w-full py-3 px-6 font-medium text-lg rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
          <FaShoppingCart className="mr-3 text-xl" />
          Add Course To Cart
        </button>
        {/* Show Details Button */}
        <button
          onClick={() => Router.push(`/Single/${_id}`)}
          className="w-full py-2 px-4 font-medium text-lg rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-200"
        >
          Show All Details
        </button>
      </div>
    </>
  )
}

export default Buttons
