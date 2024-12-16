import React from 'react'
const PrevButton = ({
  currentPageSet,
  setCurrentPageSet,
}: {
  currentPageSet: number
  setCurrentPageSet: (page: number) => void
}) => {
  // Function to move to the previous set of pages (e.g., from 5–8 back to 1–4)
  const handlePrevSet = () => {
    if (currentPageSet > 1) {
      setCurrentPageSet(currentPageSet - 1) // Move to the previous set
    }
  }
  return (
    <button
      className={`px-4 py-2 rounded ${
        currentPageSet === 1
          ? 'bg-black text-white opacity-35 cursor-not-allowed' // Disabled styling for the first set
          : 'bg-blue-600 text-yellow-300 hover:bg-blue-700' // Active styling
      }`}
      onClick={handlePrevSet} // Go to the previous set when clicked
      disabled={currentPageSet === 1} // Disable button if already on the first set
    >
      Prev
    </button>
  )
}

export default PrevButton
