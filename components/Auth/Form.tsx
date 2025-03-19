import React from 'react'
import InputField from './InputField' // Assuming InputField is a reusable component for inputs
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/utils/Redux/Store'
import { setUserAuthDetails } from '@/utils/Redux/Slice/UserSlice'

const Form = ({ isLogin }: { isLogin: boolean }) => {
  // Use Redux to get current user details from the store
  const userData = useSelector((state: RootState) => state.userinput)
  // Dispatch function to send actions to Redux store
  const Dispatch = useDispatch()
  // Handles change in input fields and updates Redux store
  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Dispatch updated user data to the Redux store
    Dispatch(
      setUserAuthDetails({
        Name: isLogin
          ? userData.Name
          : e.target.name === 'Name'
          ? e.target.value
          : userData.Name, // Only set Name for signup
        Email: e.target.name === 'Email' ? e.target.value : userData.Email, // Update email field
        Password:
          e.target.name === 'Password' ? e.target.value : userData.Password, // Update password field
      })
    )
  }
  return (
    <div className="flex flex-col gap-2">
      {/* Email Field */}
      <InputField
        Value={userData.Email} // Email value from Redux state
        Name="Email" // Field name
        type="text" // Input type
        HandleChange={HandleChange} // Handler for input change
        PlaceHolder="Enter Your Email" // Placeholder text for the input
      />
      {/* Name Field (only for Signup) */}
      {/* This field will only appear when isLogin is false (i.e., for signup) */}
      {!isLogin && (
        <InputField
          HandleChange={HandleChange} // Handler for input change
          Value={userData.Name} // Name value from Redux state
          Name="Name" // Field name
          type="text" // Input type
          PlaceHolder="Enter Your Full Name" // Placeholder text for the input
        />
      )}
      {/* Password Field */}
      <InputField
        Name="Password" // Field name
        type="password" // Input type (password)
        HandleChange={HandleChange} // Handler for input change
        Value={userData.Password} // Password value from Redux state
        PlaceHolder="Enter Your Password" // Placeholder text for the input
      />
    </div>
  )
}
export default Form
