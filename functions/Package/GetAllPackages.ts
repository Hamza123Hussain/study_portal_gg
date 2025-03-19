import { ApiUrl } from '@/utils/CourseCardInterface'
import axios from 'axios'

// GET all packages with optional pagination
export const getAllPackages = async () => {
  const Response = await axios.get(`${ApiUrl}Api/Package/GetAllPackages`)
  try {
    if (Response.status === 200) {
      return Response.data.data
    }
  } catch (error) {
    console.error('Error fetching packages:', error)
    if (Response.status === 500) {
      console.error(Response.data.error)
      console.log(Response.data.message)
    }
  }
}
