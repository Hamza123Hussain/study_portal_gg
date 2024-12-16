import React, { useState, Dispatch, SetStateAction } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog' // Import Dialog components
import FilterField from './InputField' // Custom input field component
import { FilterInterface } from '@/utils/FilterOption' // Type for filter options
import { FilterArray } from '@/utils/FilterArray' // Default filter options array
import { FilterCourses } from '@/functions/FilterCourses' // Function to filter courses

const Main = ({
  setUniversities,
  universities,
}: {
  setUniversities: Dispatch<SetStateAction<any[]>> // Typing setUniversities function
  universities: any[] // List of all universities
}) => {
  // State for storing the selected filter options
  const [FilterOption, SetOptions] = useState<FilterInterface[]>(FilterArray)

  return (
    <Dialog>
      <DialogTrigger className="w-full flex justify-end px-4">
        {/* Button to trigger filter dialog */}
        <button className="bg-white rounded-lg p-2">Filter</button>
      </DialogTrigger>
      <DialogContent className="bg-blue-500">
        <DialogHeader>
          {/* Title of the filter dialog */}
          <DialogTitle className="text-cyan-50">
            Filter Universities
          </DialogTitle>

          {/* The custom filter input field component */}
          <FilterField FilterOption={FilterOption} SetOptions={SetOptions} />

          {/* Button to apply filter */}
          <button
            onClick={() =>
              // Call the FilterCourses function to filter universities
              FilterCourses(FilterOption, setUniversities, universities)
            }
            className="bg-blue-400 border-2 mt-2 border-yellow-300 rounded-lg p-2 w-fit text-white"
          >
            Filter
          </button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default Main
