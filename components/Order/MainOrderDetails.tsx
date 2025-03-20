import { CreditCard } from 'lucide-react'
import React from 'react'
import { getStatusBadge } from './GetStatusBadge'
import { Order } from '@/utils/Interface/OrderInterface'

const MainOrderDetails = ({ Order }: { Order: Order }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-sm sm:text-base">
      <p>
        <span className="font-semibold">Name:</span> {Order.Name}
      </p>
      <p>
        <span className="font-semibold">Email:</span> {Order.Email}
      </p>
      <p className="flex items-center gap-2">
        <CreditCard size={16} className="text-purple-600" />{' '}
        {Order.PaymentMethod}
      </p>
      <p className="flex items-center gap-2">
        {getStatusBadge(Order.PaymentStatus)}
      </p>
      <p>
        <span className="font-semibold">Order Progress:</span> {Order.Progress}
      </p>
      <p>
        <span className="font-semibold">Total Amount:</span> £
        {Order.TotalAmount} GBP
      </p>
      <p>
        <span className="font-semibold">Order Date:</span>{' '}
        {new Date(Order.createdAt).toLocaleDateString()}
      </p>
    </div>
  )
}

export default MainOrderDetails
