import React from 'react'
import { useRouter } from 'next/navigation'
import AddToCartButton from '../Cart/AddToCartButton'

const Buttons = ({ _id }: { _id: string }) => {
  const Router = useRouter()

  return (
    <>
      {/* Card Footer */}
      <div className="px-6 py-4 bg-gray-100 text-center rounded-b-xl flex flex-col gap-4">
        <AddToCartButton _id={_id} />
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
