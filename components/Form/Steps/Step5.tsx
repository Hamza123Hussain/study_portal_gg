import React from 'react'
import { useSelector } from 'react-redux'
import './Step5.module.css'
import { RootState } from '@/utils/Redux/Store'
const Step5: React.FC = () => {
  const formData = useSelector((state: RootState) => state.PersonalDetails)
  const flag = useSelector((state: RootState) => state.Flag)
  return (
    <div className="space-y-4">
      {flag ? (
        <div className="flex-container flex justify-center items-center min-h-screen">
          {/* Spinner loader with class-based styling */}
          <div className="spinner"></div>
          <span>Order is Being Placed .....</span>
        </div>
      ) : (
        <>
          <h3 className="font-bold">Summary of Your Data</h3>
          {Object.entries(formData).map(([key, value]) => (
            <div key={key}>
              <strong>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}:</strong>{' '}
              {value || 'Not Provided'}
            </div>
          ))}
        </>
      )}
    </div>
  )
}
export default Step5
