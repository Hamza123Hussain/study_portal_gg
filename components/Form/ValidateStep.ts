import { FormData } from '@/utils/Interface/Main_Form_Interface'

export const validateStep = (
  formData: FormData,
  currentStep: number
): boolean => {
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
