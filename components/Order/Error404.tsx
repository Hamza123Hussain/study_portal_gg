import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Error404 = () => {
  const Router = useRouter()
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-red-50 to-red-200 text-red-800 text-center px-4">
      {/* Logo / Branding */}
      <Image
        src="/G_b-200x200.png" // Replace with your logo path
        alt="Global Grads Logo"
        width={100}
        height={100}
        className="mb-4 animate-bounce"
      />
      {/* 404 Animation */}
      <h1 className="text-5xl font-bold mb-2 animate-fade-in-down">404</h1>
      <p className="text-xl font-semibold mb-4 animate-fade-in-up">
        User not found
      </p>
      <p className="mb-6 text-gray-700">
        We could not find your user account. Please login again or contact
        support.
      </p>
      <button
        onClick={() => Router.push('/')}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
      >
        Go to Home
      </button>
    </div>
  )
}

export default Error404
