import { Package } from './PackageInterface'

export interface Order {
  Name: string
  Email: string
  PaymentMethod: string
  PaymentStatus: string
  Progress: string
  TotalAmount: number
  createdAt: string
  Course: Course[]
  Package: Package
}
export interface Course {
  _id: string
  courseTitle: string
  universityName: string
  universityLocation: string
  tuitionFeeRefined: string
  applicationFee: string
  livingExpense: number
  PlatForm: string[]
}
