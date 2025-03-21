import { Package } from './PackageInterface'

export interface Order {
  _id: string
  Name: string
  Email: string
  PaymentMethod: string
  PaymentStatus: string
  Progress: string
  TotalAmount: number
  createdAt: string
  Course: CourseID[]
  PackageID: Package
}
export interface CourseID {
  _id: string
  CourseID: CourseID
}
export interface CourseID {
  courseTitle: string
  universityName: string
  universityLocation: string
  tuitionFeeRefined: string
  applicationFee: string
  livingExpense: number
  PlatForm: string[]
}
