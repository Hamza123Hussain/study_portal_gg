// Arrow function to fetch paginated data for UK universities
export const fetchAllUniversities = async (page: any, limit = 50) => {
  console.log('Page At Function : ', page)
  try {
    // Construct the API URL with query parameters
    const response = await fetch(
      `http://localhost:5001/Api/Study/GetAllUniversities?page=${page}&limit=50`
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
    console.error('Error fetching universities:', error)
    throw error
  }
}
