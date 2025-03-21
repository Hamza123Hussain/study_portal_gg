'use client'
import React, { useEffect, useState } from 'react'
import CourseList from '@/components/Order/Course/CourseList'
import MainOrderDetails from '@/components/Order/MainOrderDetails'
import CompletePackageDetails from '@/components/Order/PackageDetails/CompletePackageDetails'
import OrderLoader from '@/components/Order/OrderLoader'
import { GetSingleOrder } from '@/functions/Order/GetSingleOrder'
import { Order } from '@/utils/Interface/OrderInterface'
const OrderDetailsWithDummyData = ({ params }: { params: { ID: string } }) => {
  // State to hold the order data
  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)
  // Fetch the order data when component mounts
  useEffect(() => {
    const fetchOrder = async () => {
      console.log('ID HERE : ', params.ID)
      const orderData = await GetSingleOrder(params.ID)
      if (orderData) {
        console.log('COMPLETE ORDER DATA : ', orderData)
        setOrder(orderData)
      }
      setLoading(false)
    }
    fetchOrder()
  }, [params.ID])
  // Show loader while fetching
  if (loading) {
    return <OrderLoader />
  }
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-r from-blue-100 to-blue-300 min-h-screen">
      <div className="mx-auto space-y-8 ">
        {/* Only show content if order is fetched */}
        {order ? (
          <>
            {/* Order Summary */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">
                Order Summary
              </h2>
              {/* Main Order Details */}
              <MainOrderDetails Order={order} />
              {/* Package Details */}
              <CompletePackageDetails Package={order.PackageID} />
            </div>
            {/* Course List */}
            <CourseList Course={order.Course} />
          </>
        ) : (
          // Handle case where no order data is found
          <p className="text-center text-red-600 font-semibold">
            No order found with the provIDed ID.
          </p>
        )}
      </div>
    </div>
  )
}
export default OrderDetailsWithDummyData
