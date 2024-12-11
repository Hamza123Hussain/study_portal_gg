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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Filter Universities</DialogTitle>
          {FilterArray.map((element) => (
            <InputField key={element} Label={element} />
          ))}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default Main
