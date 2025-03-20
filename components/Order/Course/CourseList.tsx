import { BookOpen } from 'lucide-react'
import React from 'react'
import CourseCard from './CourseCard'
import { Course } from '@/utils/Interface/OrderInterface'
const CourseList = ({ Course }: { Course: Course[] }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
      <h2 className="text-3xl font-bold text-blue-800 mb-6 flex items-center gap-2">
        <BookOpen size={28} /> Ordered Courses
      </h2>
      <div className="grid gap-6">
        {Course.map((course, idx) => (
          <CourseCard course={course} key={course._id} idx={idx} />
        ))}
      </div>
    </div>
  )
}
export default CourseList
