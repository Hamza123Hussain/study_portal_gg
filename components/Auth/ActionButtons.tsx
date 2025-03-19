import { PasswordReset } from '@/functions/Auth/ResetPass'
import { Signout } from '@/functions/Auth/Signout'
import { SignoutUser } from '@/utils/Redux/Slice/UserSlice'

import { RootState } from '@/utils/Redux/Store'

import { useRouter } from 'next/navigation'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
const ActionButtons = () => {
  const Router = useRouter()
  const Dispatch = useDispatch()
  const User = useSelector((state: RootState) => state.user)
  const UserSignout = async () => {
    const Response = await Signout()
    if (Response) {
      Dispatch(SignoutUser())
      localStorage.removeItem('QuizUserData')
    }
  }
  const ResetPassword = async () => {
    const Response = await PasswordReset(User.Email)
    if (Response) {
      Dispatch(SignoutUser())
      localStorage.removeItem('QuizUserData')
    }
  }
  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={() => Router.push('/UserAttempts')}
        className="w-full px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 ease-in-out"
      >
        View All Attempts
      </button>
      <button
        onClick={ResetPassword}
        className="w-full px-6 py-3 bg-yellow-500 text-white font-medium rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 ease-in-out"
      >
        Reset Password
      </button>
      <button
        onClick={UserSignout}
        className="w-full px-6 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300 ease-in-out"
      >
        Sign Out
      </button>
    </div>
  )
}
export default ActionButtons
