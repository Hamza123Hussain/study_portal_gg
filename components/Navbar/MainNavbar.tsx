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
import Buttons from './Buttons'
export const NavbarComponent = () => {
  return (
    <Navbar className="bg-blue-500 rounded-none text-white">
      <NavbarContainer>
        <NavbarBrand className="flex items-center gap-4">
          <Image src={'/G_b-200x200.png'} alt="keep" width={50} height={50} />
          <h1>Study Portal</h1>
        </NavbarBrand>
        <NavbarList className="flex items-center text-white">
          <CountryLinks />
          <Buttons />
        </NavbarList>
        <NavbarCollapseBtn />
        <NavbarCollapse className="text-white">
          <CountryLinks />
          <Buttons />
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  )
}
