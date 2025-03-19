import axios from 'axios'
import toast from 'react-hot-toast'
import { DeployedAPIURL } from './Login'
export const RegisterUser = async (User: any) => {
  try {
    // Send POST request to the backend to register the user
    const response = await axios.post(`${DeployedAPIURL}Api/User/CreateUser`, {
      Name: User.Name,
      Email: User.Email,
      password: User.Password,
    })

    // If successful, show success message
    if (response.status === 200) {
      toast.success(response.data.message)
      return response.data.user
    }
  } catch (err: any) {
    // Handle error
    if (err.response) {
      // Backend error
      toast.error(err.response.data.message)
    } else {
      // Network or other errors
      toast.error('Something went wrong. Please try again later.')
    }
  }
}
