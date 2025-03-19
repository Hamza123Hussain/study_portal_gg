import React, { useEffect, useState } from 'react'
import StepsCount from './StepsCount'
import { renderStepContent } from '@/functions/Form/RenderSteps'
import { useDispatch } from 'react-redux'
import { updateField } from '@/utils/Redux/Slice/FormSlice'
const MovingBetweenSteps: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const dispatch = useDispatch()
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep === 5) {
      // Final step, submit data
    } else {
      // Move to the next step
      setCurrentStep((prev) => prev + 1)
    }
  }
  const setReferralFromURL = () => {
    const urlParams = new URLSearchParams(window.location.search)
    const referral = urlParams.get('referral') // Get the 'referral' parameter from URL
    if (referral) {
      dispatch(updateField({ field: 'Refferal', value: referral }))
    }
  }
  useEffect(() => {
    setReferralFromURL()
  }, [])
  return (
    <form onSubmit={handleSubmit} className="mx-auto my-10 p-6 rounded-lg ">
      <h2 className="text-xl font-bold text-center text-gray-700 mb-4">
        Step {currentStep} of 5
      </h2>
      {/* Step Indicators */}
      <div className="flex justify-center gap-2 mb-6">
        {Array.from({ length: 5 }, (_, i) => (
          <span
            key={i}
            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
              currentStep === i + 1
                ? 'bg-green-500 text-white'
                : 'bg-gray-300 text-gray-500'
            }`}
          >
            {i + 1}
          </span>
        ))}
      </div>
      {/* Render Step Content */}
      {renderStepContent(currentStep)}
      {/* Buttons to Move Between Steps */}
      <StepsCount currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </form>
  )
}
export default MovingBetweenSteps
