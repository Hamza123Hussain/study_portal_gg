import { ApiUrl } from '@/utils/CourseCardInterface'
import axios from 'axios'
export const createOrder = async (orderData: any) => {
  const Response = await axios.post(
    `http://localhost:5001/Api/Order/NewOrder`,
    orderData
  )
  try {
    if (Response.status === 400) {
      return {
        success: false,
        message:
          'Missing required fields. Please provide all necessary details.',
      }
    }
    if (Response.status === 404) {
      return {
        success: false,
        message: 'Cart not found or does not belong to the user.',
      }
    }
    if (Response.status === 201) {
      return {
        success: true,
        message: 'Order Placed Successfully',
        order: Response.data.order,
        OrderId: Response.data.order._id,
      }
    }
  } catch (error: any) {
    console.error('Error creating order:', error.message)
    if (Response.status === 500)
      return {
        success: false,
        message: 'Failed to create order.',
        error: error.message,
      }
  }
}
