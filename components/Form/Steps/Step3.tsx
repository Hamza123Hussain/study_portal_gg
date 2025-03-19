import FormComponent from '@/components/FormDetails/Budget_test'
import EducationLevelSelector from '@/components/FormDetails/Edu'
import { handleFieldChange } from '@/functions/Form/HandleField'
import { RootState } from '@/utils/Redux/Store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
const Step3: React.FC = () => {
  const dispatch = useDispatch()
  const formData = useSelector((state: RootState) => state.PersonalDetails)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    handleFieldChange(e, dispatch, formData)
  }
  return (
    <div className="space-y-4">
      <EducationLevelSelector />
      <input
        name="primaryCoursePreference"
        value={formData.primaryCoursePreference}
        onChange={handleChange}
        required
        placeholder="Primary Course Preference"
        className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
      />
      <input
        name="secondaryCoursePreference"
        value={formData.secondaryCoursePreference}
        onChange={handleChange}
        placeholder="Secondary Course Preference"
        className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
      />
      <FormComponent />
    </div>
  )
}
export default Step3
