// Define types for the course and cart data
export interface Course {
  CourseID: string
  courseTitle: string
  universityName: string
  universityLocation: string
  courseDuration: string
  tuitionFeeRefined: string
  livingExpense: number
  applicationFee: string
  TotalExpense: number
  _id: string
}

export interface Cart {
  Course: Course[]
  totalOptions: number
}
