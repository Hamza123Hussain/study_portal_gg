import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/utils/Redux/Store'
import AuthModal from '../Auth/AuthModal'
import MainCart from '../Cart/MainCart'
import { UserModal } from '../Auth/UserModal'
const LoginCheck = () => {
  const UserName = useSelector((state: RootState) => state.user.Name)
  return (
    <>
      {UserName !== '' ? (
        <div className=" flex items-center gap-4">
          <MainCart />
          <UserModal />
        </div>
      ) : (
        <AuthModal />
      )}
    </>
  )
}

export default LoginCheck
