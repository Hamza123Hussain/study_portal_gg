import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import FilterField from './InputField'
import { FilterInterface } from '@/utils/FilterOption'

const Main = () => {
  const [FilterOption, SetOptions] = useState<FilterInterface[]>([
    { Name: 'tuitionFeeNumber', value: 0 },
    { Name: 'minimumGPA', value: 0 },
    { Name: 'ielts', value: 0 },
    { Name: 'toefl', value: 0 },
    { Name: 'pte', value: 0 },
    { Name: 'duolingo', value: 0 },
  ])
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
          <FilterField FilterOption={FilterOption} SetOptions={SetOptions} />
          <button className="bg-blue-400 border-2 mt-2 border-yellow-300 rounded-lg p-2 w-fit text-white">
            Filter{' '}
          </button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default Main
