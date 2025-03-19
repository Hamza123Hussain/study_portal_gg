import axios from 'axios'
import toast from 'react-hot-toast'

export const LoginUser = async (Email: string, Password: string) => {
  try {
    const response = await axios.get(
      `${DeployedAPIURL}Api/User/Loginuser?Email=${Email}&&Password=${Password}`
    )
    if (response.status === 200) {
      toast.success('Login Successfully')
      return response.data
    }
  } catch (error) {
    console.log('ERROR IN LOGIN : ', error)
    return error
  }
}
export const LocalAPIURL = `http://localhost:5000/`
export const DeployedAPIURL = 'https://quizgame-gg-backend.vercel.app/'
