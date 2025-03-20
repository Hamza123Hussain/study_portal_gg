'use client'
import AuthModal from '@/components/Auth/AuthModal'
import MovingBetweenSteps from '@/components/Form/MovingBetweenSteps'
import { RootState } from '@/utils/Redux/Store'
import { Lock } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'

const PersonalDetails = () => {
  const User = useSelector((state: RootState) => state.user)
  return (
    <div className=" flex flex-col my-10">
      {User.Name !== '' ? (
        <div className="flex flex-col items-center justify-center">
          <p className="text-base sm:text-lg font-bold text-gray-600">
            Please Fill In your Personal Details To Complete Your Order
          </p>
          <MovingBetweenSteps />
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
          <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-10 text-center max-w-md w-full">
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <Lock className="text-red-500" size={40} />
            </div>

            {/* Message */}
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
              Access Restricted
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Only logged in users can access this page.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default PersonalDetails
