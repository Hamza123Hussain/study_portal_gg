'use client'
import React from 'react'
import { NavbarComponent } from '../Navbar/MainNavbar'
import Footer from '../Footer/Footer'
const ConditionalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarComponent />
      <main className="flex-1 min-h-screen overflow-y-auto bg-gray-100 ">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default ConditionalLayout
