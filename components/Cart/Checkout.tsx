import { createOrder } from '@/functions/Order/CreateAnOrder'
import { RootState } from '@/utils/Redux/Store'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'
const Checkout = () => {
  const Router = useRouter()
  const User = useSelector((state: RootState) => state.user)
  const CartId = useSelector((state: RootState) => state.Cart._id)
  const PackageID = useSelector((state: RootState) => state.PackageSlice._id)
  const PlaceOrder = async () => {
    const OrderPlaced = await createOrder({
      Name: User.Name,
      Email: User.Email,
      userId: User._id,
      Cart: CartId,
      PackageID: PackageID,
    })
    if (OrderPlaced) {
      Router.push(`/GetOrder/${OrderPlaced.OrderId}`)
    }
  }
  return (
    <div className="flex justify-end p-4">
      <button
        onClick={PlaceOrder}
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
      >
        Checkout
      </button>
    </div>
  )
}
export default Checkout
