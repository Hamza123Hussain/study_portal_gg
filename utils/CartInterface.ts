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
}

export interface Cart {
  Course: Course[]
  totalOptions: number
}
