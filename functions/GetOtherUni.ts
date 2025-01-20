// Arrow function to fetch paginated data for UK universities
export const fetchOtherUniversities = async (page = 1, limit = 50) => {
  try {
    // Construct the API URL with query parameters
    const response = await fetch(
      `https://study-portal-backend.vercel.app/Api/Study/OtherUni?_page=1&_limit=100`
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
    console.error('Error fetching Other universities:', error)
    throw error
  }
}
