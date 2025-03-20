import { Course } from '@/utils/Interface/OrderInterface'
import { DollarSign, Globe, MapPin, University } from 'lucide-react'
import React from 'react'

const CourseCard = ({ course, idx }: { course: Course; idx: number }) => {
  return (
    <div
      key={course._id}
      className="p-4 sm:p-6 border border-gray-200 rounded-xl bg-blue-50 hover:bg-blue-100 transition duration-200 shadow-md"
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {idx + 1}. {course.courseTitle}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 text-sm">
        <p className="flex items-center gap-1">
          <University size={16} /> {course.universityName}
        </p>
        <p className="flex items-center gap-1">
          <MapPin size={16} /> {course.universityLocation}
        </p>
        <p className="flex items-center gap-1">
          <DollarSign size={16} /> Tuition: {course.tuitionFeeRefined}
        </p>
        <p className="flex items-center gap-1">
          <DollarSign size={16} /> Application Fee: {course.applicationFee}
        </p>
        <p className="flex items-center gap-1">
          <Globe size={16} /> Platforms: {course.PlatForm.join(', ')}
        </p>
        <p>
          <span className="font-medium">Living Expense:</span> £
          {course.livingExpense} GBP
        </p>
      </div>
    </div>
  )
}

export default CourseCard
