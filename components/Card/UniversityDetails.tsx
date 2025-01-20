import React from 'react'
import {
  FaClock,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaUniversity,
} from 'react-icons/fa'
const UniversityDetails = ({
  universityName,
  universityLocation,
  country,
  campusCity,
  duration,
  tuitionFeeRefined,
}: {
  universityName: string
  universityLocation: string
  country: string
  campusCity: string
  duration: string
  tuitionFeeRefined: string
}) => {
  return (
    <>
      {/* University Name */}
      <p className="text-md text-gray-700 flex items-center mb-3">
        <FaUniversity className="mr-2 text-blue-600" />
        {universityName}
      </p>
      {/* Location */}
      <p className="text-sm text-gray-500 flex items-center mb-4">
        <FaMapMarkerAlt className="mr-2 text-red-500" />
        {universityLocation}, {country}
      </p>
      {/* Course Details */}
      <div className="space-y-3">
        <p className="text-sm flex items-center text-gray-600">
          <FaMapMarkerAlt className="mr-2 text-green-600" />
          <span className="font-medium">Campus City:</span> {campusCity}
        </p>
        <p className="text-sm flex items-center text-gray-600">
          <FaClock className="mr-2 text-purple-600" />
          <span className="font-medium">Course Duration:</span> {duration}
        </p>
        <p className="text-sm flex items-center text-gray-600 gap-1">
          <FaMoneyBillWave className="mr-2 text-yellow-600" />
          <span className="font-medium">Tuition Fees:</span> {tuitionFeeRefined}
        </p>
      </div>
    </>
  )
}
export default UniversityDetails
