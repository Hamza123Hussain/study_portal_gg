import React from 'react'
const ToggleButton = ({
  isLogin,
  setIsLogin,
}: {
  isLogin: boolean
  setIsLogin: (auth: boolean) => void
}) => {
  return (
    <div className="flex gap-8 mb-4">
      <button
        onClick={() => setIsLogin(true)}
        className={`px-4 py-2 rounded-lg ${
          isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
      >
        Login
      </button>
      <button
        onClick={() => setIsLogin(false)}
        className={`px-4 py-2 rounded-lg ${
          !isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
      >
        Sign Up
      </button>
    </div>
  )
}
export default ToggleButton
