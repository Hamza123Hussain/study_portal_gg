import { createSlice } from '@reduxjs/toolkit'

const initialState = false

export const Flag_Slice = createSlice({
  name: 'Flag_Slice',
  initialState,
  reducers: {
    // Directly mutate the state
    UpdateCredentials: (state) => {
      return true // Update the state to true
    },
    RemoveCredentials: (state) => {
      return false // Update the state to false
    },
  },
})

export const { UpdateCredentials, RemoveCredentials } = Flag_Slice.actions
export default Flag_Slice
