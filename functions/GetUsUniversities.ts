// Arrow function to fetch paginated data for UK universities
export const fetchUSUniversities = async (page = 1, limit = 50) => {
  try {
    // Construct the API URL with query parameters
    const response = await fetch(
      `https://study-portal-backend.vercel.app/Api/Study/GetUSUniversity?page=${page}`
    )

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    // Parse the JSON response
    const data = await response.json()

    // Return the data, currentPage, totalPages, and totalDocuments
    return {
      universities: data.data,
      currentPage: data.currentPage,
      totalPages: data.totalPages,
      totalDocuments: data.totalDocuments,
    }
  } catch (error) {
    console.error('Error fetching US universities:', error)
    throw error
  }
}
