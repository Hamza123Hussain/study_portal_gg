import { ApiUrl } from '@/utils/CourseCardInterface'
import axios from 'axios'
import { toast } from 'react-hot-toast' // Importing react-hot-toast

// Function to add course to cart
export const AddCourseToCart = async (userId: string, CourseID: string) => {
  try {
    // Send POST request to backend API to add the course to the cart
    const response = await axios.post(
      `http://localhost:5001/Api/Cart/AddToCart`,
      {
        userId,
        CourseID,
      }
    )

    // Handle successful response
    if (response.status === 200) {
      // console.log('Course added to cart:', response.data.cart.Course)
      // Display success toast message
      toast.success('Course added to cart successfully!', {
        duration: 3000, // Duration of the toast
      })
      console.log(response.data.course)
      // You can update the UI or state here based on the cart data
      return response.data.course
    }
  } catch (error: any) {
    // Handle error response
    console.error('Error adding course to cart:', error)
    if (error.response && error.response.data && error.response.data.error) {
      // Display error toast if course already exists in the cart
      if (error.response.data.error === 'Course already in cart.') {
        toast.error('This course is already in your cart.', {
          duration: 3000, // Duration of the toast
        })
      } else {
        // Handle other errors
        toast.error('An error occurred. Please try again later.', {
          duration: 3000, // Duration of the toast
        })
      }
    } else {
      toast.error('An error occurred. Please try again later.', {
        duration: 3000, // Duration of the toast
      })
    }
  }
}
