'use client'
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarList,
} from 'keep-react'
import Image from 'next/image'
import CountryLinks from './CountryLinks'
// import Buttons from './Buttons'
import { useRouter } from 'next/navigation'
import MainCart from '../Cart/MainCart'
import { useSelector } from 'react-redux'
import { RootState } from '@/utils/Redux/Store'
import AuthModal from '../Auth/AuthModal'
export const NavbarComponent = () => {
  const Router = useRouter()
  const UserName = useSelector((state: RootState) => state.user.Name)
  return (
    <Navbar className="bg-blue-500 rounded-none text-white">
      <NavbarContainer>
        <NavbarBrand
          className="flex items-center cursor-pointer gap-4"
          onClick={() => Router.push('/')}
        >
          <Image src={'/G_b-200x200.png'} alt="keep" width={50} height={50} />
          <h1>Study Portal</h1>
        </NavbarBrand>
        <NavbarList className=" hidden  sm:flex items-center text-white">
          <CountryLinks />
          {/* <Buttons /> */}
          <MainCart />
        </NavbarList>
        <NavbarCollapseBtn className="sm:hidden" />
        <NavbarCollapse className="text-white bg-blue-500 border-2 border-yellow-200 rounded-lg">
          <CountryLinks />
          {/* <Buttons /> */}
          {UserName ? (
            <div className=" flex items-center gap-4">
              {' '}
              <MainCart />
              <h1>{UserName}</h1>
            </div>
          ) : (
            <AuthModal />
          )}
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  )
}
