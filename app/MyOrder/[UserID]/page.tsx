'use client'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/utils/Redux/Store'
import { Order } from '@/utils/Interface/OrderInterface'
import { GetUserOrders } from '@/functions/Order/GetUserOrders'
import OrderCard from '@/components/Order/OrderCard'
import Error404 from '@/components/Order/Error404'
const MyOrders = () => {
  const user = useSelector((state: RootState) => state.user)
  const [userOrders, setUserOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  // If user ID is not available, show 404 after short delay
  useEffect(() => {
    if (!user._id) {
      const timer = setTimeout(() => {
        setLoading(false)
      }, 1500) // Delay to show loading briefly
      return () => clearTimeout(timer)
    }
  }, [user._id])
  // Fetch user orders if user is valid
  useEffect(() => {
    const fetchUserOrders = async () => {
      try {
        const orderData = await GetUserOrders(user._id)
        if (orderData) {
          setUserOrders(orderData)
        } else {
          console.warn('No orders found or error in response')
        }
      } catch (error) {
        console.error('Error fetching user orders:', error)
      } finally {
        setLoading(false)
      }
    }
    if (user._id) {
      fetchUserOrders()
    }
  }, [user._id])
  if (loading) {
    return (
      <p className="text-center text-gray-700 mt-10 text-lg animate-pulse">
        Loading your orders...
      </p>
    )
  }
  // 404 Error UI if no user ID
  if (!user._id) {
    return <Error404 />
  }
  // Main Orders UI
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-r from-blue-50 to-blue-200 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6">
        All Orders of {user.Name}
      </h1>
      {userOrders.length === 0 ? (
        <p className="text-gray-600">You have no orders yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {userOrders.map((order) => (
            <OrderCard key={order._id} order={order} />
          ))}
        </div>
      )}
    </div>
  )
}
export default MyOrders
