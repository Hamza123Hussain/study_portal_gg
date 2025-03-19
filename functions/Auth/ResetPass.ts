import { DeployedAPIURL } from '@/utils/Interface/SignupInterface'
import axios from 'axios'
import toast from 'react-hot-toast'

export const PasswordReset = async (Email: string) => {
  const Response = await axios.get(
    `${DeployedAPIURL}Api/User/ResetPass?Email=${Email}`
  )
  try {
    // Sign out the user using Firebase Auth
    // If successful, send a 200 response
    if (Response.status === 200) {
      toast.success('Password Reset Link Sent to your Email')
      return true
    }
  } catch (error: any) {
    console.log('ERROR IN Sending Reset Link : ', error)
    toast.error(error.message)
  }
}
