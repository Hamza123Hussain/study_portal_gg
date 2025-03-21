import axios from 'axios'
export const GetSingleOrder = async (orderId: string) => {
  const Response = await axios.get(
    `http://localhost:5001/Api/Order/GetSingleOrder?orderId=${orderId}`
  )
  try {
    // Validate orderId format (MongoDB ObjectId is 24 characters)
    if (Response.status == 400) {
      console.log({
        success: false,
        message: 'Invalid order ID format.',
      })
    }
    // If no order found, return 404
    if (Response.status == 404) {
      console.log({
        success: false,
        message: 'Order not found.',
      })
    }
    // Return the found order with populated data
    if (Response.status === 200) {
      return Response.data.order
    }
  } catch (error: any) {
    // Catch and log any error, return 500 Internal Server Error
    console.error('Error fetching order:', error.message)
    if (Response.status === 500)
      console.log({
        success: false,
        message: 'Internal server error while fetching the order.',
        error: error.message,
      })
  }
}
