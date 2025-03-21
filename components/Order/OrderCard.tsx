import { Order } from '@/utils/Interface/OrderInterface'
import { useRouter } from 'next/navigation'
import React from 'react'
const OrderCard = ({ order }: { order: Order }) => {
  const router = useRouter()
  return (
    <div
      key={order._id}
      className="bg-white rounded-xl shadow-md p-4 space-y-2 border border-blue-300 hover:shadow-lg transition"
    >
      <h2 className="text-lg font-semibold text-blue-800">{order.Name}</h2>
      <p>
        <span className="font-medium">Price:</span>{' '}
        {order.PackageID.PackagePrice.toLocaleString()} PKR
      </p>
      <p>
        <span className="font-medium">Universities:</span>{' '}
        {order.PackageID.NumberOFUniversities}
      </p>
      <p>
        <span className="font-medium">Package Type:</span>{' '}
        {order.PackageID.PackageType}
      </p>
      <p>
        <span className="font-medium">Payment Status:</span>{' '}
        <span
          className={
            order.PaymentStatus === 'Pending'
              ? 'text-yellow-600'
              : 'text-green-600'
          }
        >
          {order.PaymentStatus}
        </span>
      </p>
      <p>
        <span className="font-medium">Country:</span>{' '}
        {order.PackageID.PackageCountry}
      </p>
      <button
        onClick={() => router.push(`/GetOrder/${order._id}`)}
        className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
      >
        View Complete Order Details
      </button>
    </div>
  )
}
export default OrderCard
