'use client'
import Flag from 'react-world-flags'
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
            className="text-white flex items-center"
            onClick={() => Router.push('/UkUniversities')}
          >
            <Flag
              code="GB"
              style={{ width: '20px', height: '15px', marginRight: '8px' }}
            />
            <h1>Uk Universities</h1>
          </NavbarItem>
          <NavbarItem
            className="text-white flex items-center"
            onClick={() => Router.push('/USUniversities')}
          >
            <Flag
              code="US"
              style={{ width: '20px', height: '15px', marginRight: '8px' }}
            />
            <h1>Us Universities</h1>
          </NavbarItem>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-full w-64 text-black"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </div>
        </NavbarList>

        <NavbarCollapseBtn />
        <NavbarCollapse className="text-white">
          <NavbarItem
            className="text-white flex items-center"
            onClick={() => Router.push('/UkUniversities')}
          >
            <Flag
              code="GB"
              style={{ width: '20px', height: '15px', marginRight: '8px' }}
            />
            <h1>Uk Universities</h1>
          </NavbarItem>
          <NavbarItem
            className="text-white flex items-center"
            onClick={() => Router.push('/USUniversities')}
          >
            <Flag
              code="US"
              style={{ width: '20px', height: '15px', marginRight: '8px' }}
            />
            <h1>Us Universities</h1>
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
