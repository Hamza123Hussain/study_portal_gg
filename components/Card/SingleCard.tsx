import { CourseCardProps } from '@/utils/CourseCardInterface'
import { useRouter } from 'next/navigation'
import React from 'react'
import {
  FaUniversity,
  FaClock,
  FaMoneyBillWave,
  FaMapMarkerAlt,
} from 'react-icons/fa'

const CardSingle: React.FC<CourseCardProps> = ({ course }) => {
  const Router = useRouter()
  return (
    <div className="max-w-4xl mx-auto my-10 bg-gray-50 shadow-lg rounded-xl overflow-hidden border border-gray-300 hover:shadow-2xl transition-shadow duration-300">
      <div className="flex flex-col p-6">
        {/* Course Title */}
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
          {course.courseTitle}
        </h2>

        {/* University Name */}
        <p className="text-lg text-gray-600 flex items-center mb-2">
          <FaUniversity className="mr-2 text-blue-500" />
          {course.universityName}
        </p>

        {/* Location */}
        <p className="text-sm text-gray-400 flex items-center mb-4">
          <FaMapMarkerAlt className="mr-2 text-red-500" />
          {course.universityLocation}, {course.country}
        </p>

        {/* Details Section */}
        <div className="space-y-4">
          <p className="text-sm flex items-center">
            <FaMapMarkerAlt className="mr-2 text-green-500" />
            <span className="font-semibold text-gray-700">
              Campus City:
            </span>{' '}
            {course.campusCity}
          </p>
          <p className="text-sm flex items-center">
            <FaClock className="mr-2 text-purple-500" />
            <span className="font-semibold text-gray-700">Duration:</span>{' '}
            {course.duration}
          </p>
          <p className="text-sm flex items-center">
            <FaMoneyBillWave className="mr-2 text-yellow-500" />
            <span className="font-semibold text-gray-700">
              Tuition Fee:
            </span>{' '}
            {course.tuitionFeeRefined}
          </p>
        </div>

        {/* English Proficiency */}
        <div className="mt-6">
          <p className="text-xl text-gray-700 font-semibold mb-2">
            English Proficiency:
          </p>
          <ul className="text-sm text-gray-600 list-disc list-inside">
            <li>
              <span className="font-medium">IELTS:</span> {course.ielts}
            </li>
            <li>
              <span className="font-medium">TOEFL:</span> {course.toefl}
            </li>
            <li>
              <span className="font-medium">PTE:</span> {course.pte}
            </li>
            <li>
              <span className="font-medium">Duolingo:</span> {course.duolingo}
            </li>
          </ul>
        </div>

        {/* Summary Section */}
        <div className="mt-6">
          <p className="text-xl text-gray-700 font-semibold">Summary:</p>
          <p className="text-sm text-gray-700 mt-2">{course.Summary}</p>
        </div>

        {/* Show All Details Button */}
        <div className="mt-6 flex justify-center">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200">
            Add Option
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardSingle
