import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/utils/Redux/Store'
import AuthModal from '../Auth/AuthModal'
import MainCart from '../Cart/MainCart'
import { UserModal } from '../Auth/UserModal'
import { usePathname, useRouter } from 'next/navigation'
import { Home } from 'lucide-react'
const LoginCheck = () => {
  const Router = useRouter()
  const UserName = useSelector((state: RootState) => state.user.Name)
  const Pathname = usePathname()
  return (
    <>
      {UserName !== '' ? (
        <div className=" flex items-center gap-4">
          <MainCart />
          <UserModal />
        </div>
      ) : Pathname === '/PersonalDetails' ? (
        <button
          onClick={() => Router.push('/')}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
        >
          <Home size={20} />
          Go To Home
        </button>
      ) : (
        <AuthModal />
      )}
    </>
  )
}

export default LoginCheck
