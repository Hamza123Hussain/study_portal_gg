import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { FilterArray } from '@/utils/FilterArray'
import InputField from './InputField'

const Main = () => {
  return (
    <Dialog>
      <DialogTrigger className=" w-full flex justify-end px-4">
        <button className=" bg-white rounded-lg p-2">Filter</button>
      </DialogTrigger>
      <DialogContent className=" bg-blue-500">
        <DialogHeader>
          <DialogTitle className=" text-cyan-50">
            Filter Universities
          </DialogTitle>

          <InputField />

          <button className="bg-blue-400 border-2 mt-2 border-yellow-300 rounded-lg p-2 w-fit text-white">
            Filter{' '}
          </button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default Main
