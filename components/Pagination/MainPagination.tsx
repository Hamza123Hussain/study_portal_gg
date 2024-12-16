import { Pagination } from '@nextui-org/react'

export default function MainPagination({
  TotalPages,
  setcurrentpage,
}: {
  TotalPages: number
  setcurrentpage: (page: number) => void
}) {
  return (
    <div className=" flex items-center p-3  justify-center  ">
      <Pagination
        className=" border-2 border-black rounded-xl bg-gray-100"
        initialPage={1}
        total={TotalPages}
      />
    </div>
  )
}
