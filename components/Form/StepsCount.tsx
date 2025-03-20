import { RootState } from '@/utils/Redux/Store'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { validateStep } from './ValidateStep'
import { FormSubmitted } from './FormSubmission'
type StepsCountProps = {
  currentStep: number
  setCurrentStep: (step: number) => void
}
const StepsCount: React.FC<StepsCountProps> = ({
  currentStep,
  setCurrentStep,
}) => {
  const Router = useRouter()
  const Dispatch = useDispatch()
  const formData = useSelector((state: RootState) => state.PersonalDetails)
  const CartID = useSelector((state: RootState) => state.Cart._id)
  const User = useSelector((state: RootState) => state.user)
  const PackageId = useSelector((state: RootState) => state.PackageSlice._id)
  const handleNext = (): void => {
    if (validateStep(formData, currentStep)) {
      setCurrentStep(currentStep + 1)
    } else {
      toast.error('Please fill out all required fields before proceeding.')
    }
  }
  const handlePrevious = (): void => {
    setCurrentStep(currentStep - 1)
  }
  return (
    <div className="flex justify-between mt-6">
      {currentStep > 1 && (
        <button
          type="button"
          onClick={handlePrevious}
          className="px-4 py-2 bg-gray-300 text-black rounded-md"
        >
          Previous
        </button>
      )}
      {currentStep < 5 ? (
        <button
          type="button"
          onClick={handleNext}
          className="px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Next
        </button>
      ) : (
        <button
          type="submit"
          onClick={() =>
            FormSubmitted(formData, Dispatch, User, CartID, PackageId, Router)
          }
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Complete Order
        </button>
      )}
    </div>
  )
}
export default StepsCount
