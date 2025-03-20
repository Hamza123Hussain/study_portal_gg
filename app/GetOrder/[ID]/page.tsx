'use client'
import React from 'react'
import CourseList from '@/components/Order/Course/CourseList'
import MainOrderDetails from '@/components/Order/MainOrderDetails'
import { Order } from '@/utils/Interface/OrderInterface'
const OrderDetailsWithDummyData = () => {
  const Order: Order = {
    Name: 'Hamza Hussain',
    Email: 'hamza@gmail.com',
    PaymentMethod: 'Cash On Delivery',
    PaymentStatus: 'Pending',
    Progress: 'Pending',
    TotalAmount: 100,
    createdAt: '2025-03-20T08:02:35.138Z',
    Course: [
      {
        _id: '1',
        courseTitle: 'Master of Arts - TESOL',
        universityName: 'University of Reading',
        universityLocation: 'South East, UK',
        tuitionFeeRefined: '£22,350 GBP / Year',
        applicationFee: '0 GBP',
        livingExpense: 14550,
        PlatForm: ['ApplyBoard', 'EDVOY'],
      },
      {
        _id: '2',
        courseTitle: 'MSc - Finance and FinTech',
        universityName: 'University of Reading',
        universityLocation: 'South East, UK',
        tuitionFeeRefined: '£27,500 GBP / Year',
        applicationFee: '0 GBP',
        livingExpense: 14550,
        PlatForm: ['ApplyBoard', 'EDVOY'],
      },
      {
        _id: '3',
        courseTitle: 'MSc - Finance',
        universityName: 'University of Reading',
        universityLocation: 'South East, UK',
        tuitionFeeRefined: '£28,000 GBP / Year',
        applicationFee: '0 GBP',
        livingExpense: 14550,
        PlatForm: ['ApplyBoard', 'EDVOY'],
      },
    ],
  }
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-r from-blue-100 to-blue-300 min-h-screen">
      <div className="mx-auto space-y-8">
        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Order Summary
          </h2>
          <MainOrderDetails Order={Order} />
        </div>
        {/* Course List */}
        <CourseList Course={Order.Course} />
      </div>
    </div>
  )
}

export default OrderDetailsWithDummyData
