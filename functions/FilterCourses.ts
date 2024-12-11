import { FilterInterface } from '@/utils/FilterOption'
// This function filters the universities (courses) based on selected filter options and updates the state with the filtered results.
export const FilterCourses = (
  filteroption: FilterInterface[], // Array containing the filter options selected by the user
  setUniversities: any, // State function to update the filtered universities
  universities: any[] // Array of all universities (courses) to filter
) => {
  // Extracting the filter values from the filteroption array
  // The filteroption array contains different filter criteria (tuitionFee, IELTS, PTE, etc.)
  const tuitionFeeNumber = filteroption[0].value // Assuming the first filter is tuition fee
  const ielts = filteroption[1].value // Assuming the second filter is IELTS score
  const pte = filteroption[2].value // Assuming the third filter is PTE score
  const duolingo = filteroption[3].value // Assuming the fourth filter is Duolingo score
  // We use the setUniversities function to filter the universities and update the state with the filtered results
  setUniversities(
    // The filter function goes through each university (course) and checks if it matches the selected filter options
    universities.filter((course) => {
      // Convert the string values from the course (tuition fee, IELTS, PTE, and Duolingo scores) to numbers for proper comparison
      const courseTuitionFee = parseFloat(course.tuitionFeeNumber) // Convert tuitionFeeNumber to a number (for accurate comparison)
      const courseIelts = parseFloat(course.ielts) // Convert IELTS score to a number (for accurate comparison)
      const coursePte = parseInt(course.pte, 10) // Convert PTE score to a number (for accurate comparison)
      const courseDuolingo = parseInt(course.duolingo, 10) // Convert Duolingo score to a number (for accurate comparison)
      // Check if each course meets the selected filter options or exceeds the required threshold
      // Each condition is checked, and if the filter value is not provided (null or undefined), it passes the condition
      // Check if the course tuition fee is less than or equal to the selected tuition fee filter
      const tuitionFeeMatches = tuitionFeeNumber
        ? courseTuitionFee <= tuitionFeeNumber
        : true
      // Check if the course IELTS score is greater than or equal to the selected IELTS filter
      const ieltsMatches = ielts ? courseIelts >= ielts : true
      // Check if the course PTE score is greater than or equal to the selected PTE filter
      const pteMatches = pte ? coursePte >= pte : true
      // Check if the course Duolingo score is greater than or equal to the selected Duolingo filter
      const duolingoMatches = duolingo ? courseDuolingo >= duolingo : true
      // Return true if the course satisfies all the selected filter conditions
      // If a filter value is not provided (null or undefined), it will automatically pass that condition (since it defaults to 'true')
      return tuitionFeeMatches && ieltsMatches && pteMatches && duolingoMatches
    })
  )
}
