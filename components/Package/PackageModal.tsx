import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import PackageSelection from './PackageSelection'
const PackageModal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <button className=" w-full bg-yellow-500 p-3 rounded-lg text-white">
          Select A Package
        </button>
      </DialogTrigger>
      <DialogContent>
        <PackageSelection />
      </DialogContent>
    </Dialog>
  )
}
export default PackageModal
