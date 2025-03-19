import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Signout } from '@/functions/Auth/Signout'
import { SignoutUser } from '@/utils/Redux/Slice/UserSlice'
import { RootState } from '@/utils/Redux/Store'
import { useRouter } from 'next/navigation'
import { FaSignOutAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
export function UserModal() {
  const User = useSelector((State: RootState) => State.user)
  const Router = useRouter()
  const Dispatch = useDispatch()
  const HandleSignout = async () => {
    const SignedOut = await Signout()
    if (SignedOut) {
      Dispatch(SignoutUser())
    }
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className=" bg-white text-black   border-2 border-green-400 rounded-lg p-2">
          {User.Name}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex flex-col justify-between my-5 gap-3">
          <button
            onClick={() => Router.push(`/MyOrders/${User._id}`)}
            className=" bg-blue-500 p-3 text-white border-2 border-black rounded-lg"
          >
            My Orders
          </button>
          <button
            onClick={HandleSignout}
            className=" bg-red-500 p-3 flex items-center justify-center gap-4 text-white border-2 border-black rounded-lg"
          >
            <span>Sign Out</span>
            <FaSignOutAlt />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
