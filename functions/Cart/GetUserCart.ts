import { ApiUrl } from '@/utils/CourseCardInterface'
import axios from 'axios'

export const fetchUserCart = async (userId: string) => {
  try {
    const response = await axios.get(
      `${ApiUrl}Api/Cart/UserCart?userId=${userId}`
    )
    console.log('CART DATA : ', response.data.cart)
    return response.data.cart // Returns the cart object
  } catch (error) {
    console.error('Error fetching cart:', error)
    return null
  }
}
