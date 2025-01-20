import { CourseCardProps } from '@/utils/CourseCardInterface'
import React from 'react'
import EnglishProficiency from './EnglishProficency'
import UniversityDetails from './UniversityDetails'
import Buttons from './Buttons'
const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="w-[350px] h-[600px] mx-auto bg-white shadow-lg rounded-xl overflow-hidden border border-gray-300 hover:shadow-2xl transition-shadow duration-300">
      <div className="h-full flex flex-col">
        {/* Card Header */}
        <div className="p-6 flex-grow overflow-y-auto">
          {/* Course Title */}
          <h2 className="text-lg font-bold h-20 text-gray-800 mb-2 text-center">
            {course.courseTitle}
          </h2>
          {/**University Details */}
          <UniversityDetails
            universityName={course.universityName}
            universityLocation={course.universityLocation}
            country={course.country}
            campusCity={course.campusCity}
            duration={course.duration}
            tuitionFeeRefined={course.tuitionFeeRefined}
          />
          {/* English Proficiency */}
          <EnglishProficiency
            ielts={course.ielts}
            toefl={course.toefl}
            pte={course.pte}
            duolingo={course.duolingo}
          />
          <Buttons _id={course._id} />
        </div>
      </div>
    </div>
  )
}
export default CourseCard
