import { Package } from '@/utils/Interface/PackageInterface'
import { SetPackageData } from '@/utils/Redux/Slice/PackageSlice'
import React from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
const ConfirmPackagebutton = ({ Package }: { Package: Package }) => {
  const Dispatch = useDispatch()
  return (
    <button
      onClick={() => {
        Dispatch(SetPackageData(Package))
        toast.success('Package Confirmed')
      }}
      className=" bg-blue-500 hover:bg-blue-300 text-white p-3 mx-auto rounded-lg my-2"
    >
      Confirm Package
    </button>
  )
}

export default ConfirmPackagebutton
