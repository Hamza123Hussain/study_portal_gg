import React from 'react'
import InputField from './InputField' // Reusable input component
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/utils/Redux/Store'
import { setUserDetails } from '@/utils/Redux/User_Slice'
const Form = ({ isLogin }: { isLogin: boolean }) => {
  // Get user data from Redux state
  const userData = useSelector((state: RootState) => state.userinput)
  const Dispatch = useDispatch()
  // Handle input field changes
  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    Dispatch(
      setUserDetails({
        Name:
          isLogin || e.target.name !== 'Name' ? userData.Name : e.target.value,
        Email: e.target.name === 'Email' ? e.target.value : userData.Email,
        Password:
          e.target.name === 'Password' ? e.target.value : userData.Password,
      })
    )
  }
  return (
    <div className="flex flex-col gap-4">
      {/* Email Field */}
      <InputField
        Value={userData.Email}
        Name="Email"
        type="text"
        HandleChange={HandleChange}
        PlaceHolder="Enter Your Email"
      />

      {/* Name Field (only for Signup) */}
      {!isLogin && (
        <InputField
          HandleChange={HandleChange}
          Value={userData.Name}
          Name="Name"
          type="text"
          PlaceHolder="Enter Your Full Name"
        />
      )}
      {/* Password Field */}
      <InputField
        Name="Password"
        type="password"
        HandleChange={HandleChange}
        Value={userData.Password}
        PlaceHolder="Enter Your Password"
      />
      {/* Note Section */}
      <div className="text-sm text-gray-600 border-t pt-3 mt-2">
        {isLogin ? (
          <p>
            <strong>Note:</strong> If you are a member of the Quiz Game of{' '}
            <span className="text-blue-600 font-semibold">Global Grads</span>,
            you can use your game credentials to log in here.
          </p>
        ) : (
          <p>
            <strong>Note:</strong> If you have already signed up for the Quiz
            Game of{' '}
            <span className="text-blue-600 font-semibold">Global Grads</span>,
            you do not need to sign up again here. Please use your game login
            credentials.
          </p>
        )}
      </div>
    </div>
  )
}
export default Form
