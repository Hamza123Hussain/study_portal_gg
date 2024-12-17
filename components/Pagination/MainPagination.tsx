import React, { useState } from 'react'
import NextButton from './NextButton'
import PrevButton from './PrevButton'
interface PaginationProps {
  TotalPages: number // Total number of pages in the dataset
  currentpage: number // The currently selected page
  setcurrentpage: (page: number) => void // Function to update the current page
}
export default function MainPagination({
  TotalPages,
  currentpage,
  setcurrentpage,
}: PaginationProps) {
  const [currentPageSet, setCurrentPageSet] = useState(1) // Tracks the current "set" of pages (e.g., 1–4, 5–8)
  const pagesPerSet = 4 // Determines how many pages to display per set
  // Calculate the first and last pages to show in the current set
  const startPage = (currentPageSet - 1) * pagesPerSet + 1 // First page of the current set
  const endPage = Math.min(currentPageSet * pagesPerSet, TotalPages) // Last page of the current set (doesn't exceed TotalPages)
  // Function to handle when a page number is clicked
  const handlePageClick = (page: number) => {
    setcurrentpage(page) // Update the current page
  }
  return (
    <div className="flex justify-center items-center space-x-2 px-4 py-2 rounded-xl border-4 border-black bg-gray-300 my-10  w-fit mx-auto">
      <PrevButton
        currentPageSet={currentPageSet}
        setCurrentPageSet={setCurrentPageSet}
      />
      {/* Page Numbers */}
      {Array.from(
        { length: endPage - startPage + 1 }, // Create an array with the length of pages in the current set
        (_, index) => startPage + index // Calculate the page numbers for the current set
      ).map((page) => (
        <button
          key={page} // Use the page number as the unique key
          onClick={() => handlePageClick(page)} // Set the clicked page as the current page
          className={`px-4 py-2 rounded ${
            currentpage === page
              ? 'bg-yellow-400 text-blue-800 font-bold' // Active page styling
              : 'bg-blue-600 text-yellow-300 hover:bg-blue-700 hover:text-yellow-100' // Default button styling with hover effect
          }`}
        >
          {page} {/* Display the page number */}
        </button>
      ))}
      <NextButton
        currentPageSet={currentPageSet}
        setCurrentPageSet={setCurrentPageSet}
        TotalPages={TotalPages}
      />
    </div>
  )
}
