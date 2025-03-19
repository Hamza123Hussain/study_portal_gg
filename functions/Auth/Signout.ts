import { DeployedAPIURL } from '@/utils/Interface/SignupInterface'
import axios from 'axios'
import toast from 'react-hot-toast'

export const Signout = async () => {
  const Response = await axios(`${DeployedAPIURL}Api/User/Signout`)
  try {
    // Sign out the user using Firebase Auth
    // If successful, send a 200 response
    if (Response.status === 200) {
      toast.success('Signout Successfully')
      return true
    }
  } catch (error: any) {
    console.log('ERROR IN SIGNOUT : ', error)
    toast.error(error.message)
  }
}
