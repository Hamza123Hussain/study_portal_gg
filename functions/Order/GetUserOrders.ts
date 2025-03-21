import axios from 'axios'
export const GetUserOrders = async (USERID: string) => {
  const Response = await axios.get(
    `http://localhost:5001/Api/Order/GetUserOrders?USERID=${USERID}`
  )

  try {
    if (Response.status == 400) {
      console.log({
        success: false,
        message: 'User ID is required.',
      })
    }
    // Fetch orders for the user and populate CourseID and PackageID

    if (Response.status === 404) {
      console.log({
        success: false,
        message: 'No orders found for this user.',
      })
    }

    if (Response.status == 200) {
      // console.log('User Orders : ', Response.data)
      return Response.data.orders
    }
  } catch (error: any) {
    console.error('Error fetching user orders:', error.message)
    if (Response.status == 500)
      console.log({
        success: false,
        message: 'Internal server error while fetching user orders.',
        error: error.message,
      })
  }
}
