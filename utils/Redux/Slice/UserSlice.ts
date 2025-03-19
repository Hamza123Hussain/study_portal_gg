import { createSlice, PayloadAction } from '@reduxjs/toolkit'
const initialState = {
  Name: '', // Stores the user's name
  Email: '', // Stores the user's email
  Password: '', // Stores the user's password
  _id: '',
}
// Creating the slice for user input management
const UserData = createSlice({
  name: 'UserData',
  initialState,
  reducers: {
    // Action to set all user details (Name, Email, Password)
    setUserAuthDetails: (
      state,
      action: PayloadAction<{
        Name: string
        Email: string
        Password: string
        _id: string
      }>
    ) => {
      // Update the state properties with the payload values
      state.Name = action.payload.Name
      state.Email = action.payload.Email
      state.Password = action.payload.Password
      state._id = action.payload._id
    },
    SignoutUser: (state) => {
      // Update the state properties with the payload values
      state.Name = ''
      state.Email = ''
      state.Password = ''
      state._id = ''
    },
    // Optionally, if you want individual setters for each field:
    setUserName: (state, action: PayloadAction<string>) => {
      state.Name = action.payload
    },
    setUserEmail: (state, action: PayloadAction<string>) => {
      state.Email = action.payload
    },
    setUserPassword: (state, action: PayloadAction<string>) => {
      state.Password = action.payload
    },
  },
})
export const {
  setUserAuthDetails,
  setUserName,
  setUserEmail,
  setUserPassword,
  SignoutUser,
} = UserData.actions

export default UserData
