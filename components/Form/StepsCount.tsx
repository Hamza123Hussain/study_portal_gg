import createStudent from '@/functions/Students/NewStudentAdd'
import {
  RemoveCredentials,
  UpdateCredentials,
} from '@/utils/Redux/Slice/FlagSlice'
import { RootState } from '@/utils/Redux/Store'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
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
  const validateStep = (): boolean => {
    // Perform validation based on the current step
    switch (currentStep) {
      case 1:
        return (
          formData.name.trim() !== '' &&
          formData.email.trim() !== '' &&
          formData.phone.trim() !== '' &&
          formData.city.trim() !== ''
        )
      case 2:
        return (
          formData.academicLevel1.trim() !== '' &&
          formData.level1Marks.trim() !== '' &&
          formData.level1Year.trim() !== '' &&
          formData.academicLevel2.trim() !== '' &&
          formData.level2Marks.trim() !== '' &&
          formData.level2Year.trim() !== ''
        )
      case 3:
        return formData.primaryCoursePreference.trim() !== ''
      // Add further cases for other steps as needed
      default:
        return true
    }
  }
  const handleNext = (): void => {
    if (validateStep()) {
      setCurrentStep(currentStep + 1)
    } else {
      toast.error('Please fill out all required fields before proceeding.')
    }
  }
  const handlePrevious = (): void => {
    setCurrentStep(currentStep - 1)
  }
  const FormSubmitted = async () => {
    Dispatch(UpdateCredentials())
    try {
      await createStudent(formData)
      Dispatch(RemoveCredentials())
      toast.success('Form Has Been Submitted')
      Router.push('/success')
    } catch (error) {
      console.error('Failed to create student:', error)
      toast.error('Form Has Not Been Submitted. Duplication Error')
    }
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
          onClick={FormSubmitted}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Submit
        </button>
      )}
    </div>
  )
}
export default StepsCount
