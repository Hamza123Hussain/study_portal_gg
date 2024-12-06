import React from 'react'
import Flag from 'react-world-flags'
import { NavbarItem } from 'keep-react'
import { useRouter } from 'next/navigation'
const CountryLinks = () => {
  const Router = useRouter()
  return (
    <>
      <NavbarItem
        className="text-white flex gap-2 items-center hover:bg-none"
        onClick={() => Router.push('/UkUniversities')}
      >
        <Flag
          code="GB"
          style={{ width: '20px', height: '15px', marginRight: '8px' }}
        />
        <h1 className=" text-sm text-nowrap">Uk Universities</h1>
      </NavbarItem>
      <NavbarItem
        className="text-white flex items-center "
        onClick={() => Router.push('/USUniversities')}
      >
        <Flag
          code="US"
          style={{ width: '20px', height: '15px', marginRight: '8px' }}
        />
        <h1 className=" text-sm text-nowrap">Us Universities</h1>
      </NavbarItem>
    </>
  )
}
export default CountryLinks
