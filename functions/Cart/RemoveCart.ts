import { ApiUrl } from '@/utils/CourseCardInterface'
import axios from 'axios'
import toast from 'react-hot-toast'

export const RemoveItemFromCart = async (userId: string, courseId: string) => {
  try {
    // Send POST request to backend API to remove the course from the cart
    const response = await axios.post(
      `https://study-portal-backend.vercel.app/Api/Cart/RemoveAItem`,
      {
        userId,
        CourseID: courseId, // Ensure correct key name matches backend
      }
    )

    // Handle successful response
    if (response.status === 200) {
      toast.success('Course removed from cart successfully!', {
        duration: 3000, // Duration of the toast
      })
      return response.data.cart // Return updated cart data for further usage
    }
  } catch (error: any) {
    console.error('Error removing course from cart:', error)

    if (error.response && error.response.data && error.response.data.error) {
      // Specific error handling
      if (error.response.data.error === 'Cart not found.') {
        toast.error('Your cart was not found.', { duration: 3000 })
      } else if (error.response.data.error === 'Course not found in cart.') {
        toast.error('This course is not in your cart.', { duration: 3000 })
      } else {
        toast.error('An error occurred. Please try again later.', {
          duration: 3000,
        })
      }
    } else if (!error.response) {
      toast.error('Network error. Please check your connection.', {
        duration: 3000,
      })
    } else {
      toast.error('An unexpected error occurred. Please try again.', {
        duration: 3000,
      })
    }
  }
}
