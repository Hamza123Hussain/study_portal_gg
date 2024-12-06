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
    <div className="w-[350px] h-[400px] mx-auto my-5 bg-gray-50 shadow-lg rounded-xl overflow-hidden border border-gray-300 hover:shadow-2xl transition-shadow duration-300">
      <div className="h-full flex flex-col">
        <div className="p-4 flex-grow">
          {/* Course Title */}
          <h2 className="text-xl font-extrabold text-gray-800 truncate">
            {course.courseTitle}
          </h2>
          {/* University Name */}
          <p className="text-lg text-gray-600 flex items-center mt-2">
            <FaUniversity className="mr-2 text-blue-500" />
            {course.universityName}
          </p>
          {/* Location */}
          <p className="text-sm text-gray-400 flex items-center mt-1">
            <FaMapMarkerAlt className="mr-2 text-red-500" />
            {course.universityLocation}, {course.country}
          </p>

          {/* Details */}
          <div className="mt-4 space-y-2">
            <p className="text-sm flex items-center">
              <FaMapMarkerAlt className="mr-2 text-green-500" />
              <span className="font-semibold text-gray-700">
                Campus City:
              </span>{' '}
              {course.campusCity}
            </p>
            <p className="text-sm flex items-center">
              <FaClock className="mr-2 text-purple-500" />
              <span className="font-semibold text-gray-700">
                Duration:
              </span>{' '}
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
          <div className="mt-4">
            <p className="text-gray-700 font-semibold">English Proficiency:</p>
            <ul className="text-sm text-gray-600 list-disc list-inside mt-2">
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
        <button onClick={() => Router.push(`/Single/${course._id}`)}>
          Show All Details
        </button>
      </div>
    </div>
  )
}

export default CourseCard
