import { createSlice, PayloadAction } from '@reduxjs/toolkit'
const initialState = {
  Name: '', // Stores the user's name
  Email: '', // Stores the user's email
  Password: '', // Stores the user's password
}
// Creating the slice for user input management
const UserInput = createSlice({
  name: 'UserData',
  initialState,
  reducers: {
    // Action to set all user details (Name, Email, Password)
    setUserDetails: (
      state,
      action: PayloadAction<{
        Name: string
        Email: string
        Password: string
      }>
    ) => {
      // Update the state properties with the payload values
      state.Name = action.payload.Name
      state.Email = action.payload.Email
      state.Password = action.payload.Password
    },
    CleanUp: (state) => {
      // Update the state properties with the payload values
      state.Name = ''
      state.Email = ''
      state.Password = ''
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
  setUserDetails,
  setUserName,
  setUserEmail,
  setUserPassword,
  CleanUp,
} = UserInput.actions

export default UserInput
