import axios from 'axios'

export const GetSingleCourse = async (id: string) => {
  try {
    // Send GET request to fetch course data by ID
    const response = await axios.get(
      `http://localhost:5001/Api/Study/SingleCourse?_id=${id}`
    )

    // Check if the response is successful
    if (response.status === 200) {
      // Return the course data if found
      return response.data
    } else {
      // Handle non-200 responses (e.g., 404, 500)
      throw new Error(
        `Error: Unable to fetch course, status code: ${response.status}`
      )
    }
  } catch (error) {
    // Catch any errors during the request
    console.error('Error fetching course:', error)
    throw error // Re-throw the error for further handling if needed
  }
}
