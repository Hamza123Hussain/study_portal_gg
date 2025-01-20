import { Course } from '@/utils/CartInterface'
import React from 'react'
import { FaCalendarAlt, FaDollarSign } from 'react-icons/fa'
const CourseCard = ({ course }: { course: Course }) => {
  return (
    <div
      key={course.CourseID}
      className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl  transition-all duration-300"
    >
      <div className="flex-grow mt-2 sm:mt-0">
        <h3 className="text-xl font-semibold text-gray-800">
          {course.courseTitle}
        </h3>
        <p className="text-sm text-gray-600">{course.universityName}</p>
        <p className="text-sm text-gray-500">{course.universityLocation}</p>
      </div>
      <div className="text-right space-y-2 mt-4 sm:mt-0">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <FaCalendarAlt className="text-indigo-600" />
          <span>Duration: {course.courseDuration}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <FaDollarSign className="text-green-600" />
          <span>Tuition Fee: {course.tuitionFeeRefined}</span>
        </div>
        {course.livingExpense !== undefined && (
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <FaDollarSign className="text-blue-600" />
            <span>Living Expense: {course.livingExpense}</span>
          </div>
        )}
        {course.TotalExpense !== undefined && (
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <FaDollarSign className="text-red-600" />
            <span>Total Expense: {course.TotalExpense}</span>
          </div>
        )}
        {course.applicationFee && (
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <FaDollarSign className="text-yellow-600" />
            <span>Application Fee: {course.applicationFee}</span>
          </div>
        )}
      </div>
    </div>
  )
}
export default CourseCard
