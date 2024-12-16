import React from 'react'
const NextButton = ({
  currentPageSet,
  setCurrentPageSet,
  TotalPages,
}: {
  currentPageSet: number
  setCurrentPageSet: (page: number) => void
  TotalPages: number
}) => {
  // Total number of page sets (helps in deciding when to disable Next button)
  const totalPageSets = Math.ceil(TotalPages / 4)
  // Function to move to the next set of pages (e.g., from 1–4 to 5–8)
  const handleNextSet = () => {
    if (currentPageSet < totalPageSets) {
      setCurrentPageSet(currentPageSet + 1) // Move to the next set
    }
  }
  return (
    <button
      className={`px-4 py-2 rounded ${
        currentPageSet === totalPageSets
          ? 'bg-black text-white opacity-35 cursor-not-allowed' // Disabled styling for the last set
          : 'bg-blue-600 text-yellow-300 hover:bg-blue-700' // Active styling
      }`}
      onClick={handleNextSet} // Go to the next set when clicked
      disabled={currentPageSet === totalPageSets} // Disable button if already on the last set
    >
      Next
    </button>
  )
}
export default NextButton
