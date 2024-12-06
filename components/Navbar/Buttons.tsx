import React from 'react'

const Buttons = () => {
  return (
    <>
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
      <button className="bg-green-600 py-2 px-4 rounded-full text-white hover:bg-green-700 transition-all duration-200 w-full">
        Book Consultation
      </button>
    </>
  )
}

export default Buttons
