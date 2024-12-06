'use client'
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from 'keep-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
export const NavbarComponent = () => {
  const Router = useRouter()
  return (
    <Navbar className="bg-blue-500 rounded-none text-white">
      <NavbarContainer>
        <NavbarBrand className="flex items-center gap-4">
          <Image src={'/G_b-200x200.png'} alt="keep" width={50} height={50} />
          <h1>Study Portal</h1>
        </NavbarBrand>
        <NavbarList className="flex items-center text-white">
          <NavbarItem
            className=" text-white"
            onClick={() => Router.push('/UkUniversities')}
          >
            Uk Universities
          </NavbarItem>
          <NavbarItem
            className=" text-white"
            onClick={() => Router.push('/USUniversities')}
          >
            Us Universities
          </NavbarItem>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-full w-64"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </div>
        </NavbarList>

        <NavbarCollapseBtn />
        <NavbarCollapse className=" text-white">
          <NavbarItem
            className=" text-white"
            onClick={() => Router.push('/UkUniversities')}
          >
            Uk Universities
          </NavbarItem>
          <NavbarItem
            className=" text-white"
            onClick={() => Router.push('/USUniversities')}
          >
            Us Universities
          </NavbarItem>
          {/* Search Bar for mobile */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-full w-64"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </div>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  )
}
