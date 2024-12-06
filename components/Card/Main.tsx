import { CourseCardProps } from '@/utils/CourseCardInterface'
import { useRouter } from 'next/navigation'
import React from 'react'
import {
  FaUniversity,
  FaClock,
  FaMoneyBillWave,
  FaMapMarkerAlt,
} from 'react-icons/fa'

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const Router = useRouter()
  return (
    <div className="mx-auto my-5 bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="h-full flex flex-col">
        <div className="p-6 flex-grow">
          {/* Course Title */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            {course.courseTitle}
          </h2>

          {/* University Name */}
          <p className="text-lg text-gray-700 flex items-center mb-3">
            <FaUniversity className="mr-2 text-blue-600" />
            {course.universityName}
          </p>

          {/* Location */}
          <p className="text-sm text-gray-500 flex items-center mb-4">
            <FaMapMarkerAlt className="mr-2 text-red-500" />
            {course.universityLocation}, {course.country}
          </p>

          {/* Details */}
          <div className="space-y-3">
            <p className="text-sm flex items-center text-gray-600">
              <FaMapMarkerAlt className="mr-2 text-green-600" />
              <span className="font-medium">Campus City:</span>{' '}
              {course.campusCity}
            </p>
            <p className="text-sm flex items-center text-gray-600">
              <FaClock className="mr-2 text-purple-600" />
              <span className="font-medium">Course Duration:</span>{' '}
              {course.duration}
            </p>
            <p className="text-sm flex items-center text-gray-600">
              <FaMoneyBillWave className="mr-2 text-yellow-600" />
              <span className="font-medium">Tuition Fees:</span>{' '}
              {course.tuitionFeeRefined}
            </p>
          </div>

          {/* English Proficiency */}
          <div className="mt-4">
            <p className="text-lg font-semibold text-gray-800 mb-2">
              English Proficiency Requirements:
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
        </div>

        {/* Button */}
        <div className="px-6 py-4 bg-gray-100 text-center rounded-b-xl">
          <button
            onClick={() => Router.push(`/Single/${course._id}`)}
            className="w-full py-2 px-4 font-medium text-lg rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200"
          >
            Show All Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
