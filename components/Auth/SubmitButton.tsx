import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginUser } from '@/functions/Auth/Login'
import { RegisterUser } from '@/functions/Auth/SignUp'
import { encryptData } from '@/utils/Encryption_Decryption'
import { RootState } from '@/utils/Redux/Store'
import { setUserAuthDetails } from '@/utils/Redux/Slice/UserSlice'
const SubmitButton = ({ isLogin }: { isLogin: boolean }) => {
  const Dispatch = useDispatch()
  const User = useSelector((state: RootState) => state.userinput)
  const SubmitUserDetails = async () => {
    let Data
    if (isLogin) {
      Data = await LoginUser(User.Email, User.Password)
    } else {
      Data = await RegisterUser(User)
    }
    if (Data) {
      // Dispatch the user details to Redux store
      Dispatch(
        setUserAuthDetails({
          Name: Data.Name,
          Email: Data.Email,
          Password: '',
          _id: Data._id,
        })
      )
      // Encrypt user data and store in localStorage
      encryptData({
        Name: Data.Name,
        Email: Data.Email,
        Password: '', // Avoid storing passwords
        _id: Data._id,
      })
    }
  }
  return (
    <button
      onClick={SubmitUserDetails}
      className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
    >
      {isLogin ? 'Login' : 'Sign Up'}
    </button>
  )
}
export default SubmitButton
