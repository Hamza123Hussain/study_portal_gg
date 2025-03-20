import { handleFieldChange } from '@/functions/Form/HandleField'
import { RootState } from '@/utils/Redux/Store'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
const EducationLevelSelector: React.FC = () => {
  const dispatch = useDispatch()
  const formData = useSelector((state: RootState) => state.PersonalDetails)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    handleFieldChange(e, dispatch, formData)
  }
  return (
    <div className="space-y-4">
      <label
        htmlFor="educationLevel"
        className="block text-gray-700 font-semibold"
      >
        Which level of education do you want to apply for?{' '}
        <span className="text-red-500">*</span>
      </label>
      <select
        id="educationLevel"
        name="educationLevel"
        value={formData.educationLevel}
        onChange={handleChange}
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
      >
        <option value="">Select Education Level</option>
        <option value="3 Years Bachelors Degree">
          3 Years Bachelors Degree
        </option>
        <option value="4 Years Bachelors Degree">
          4 Years Bachelors Degree
        </option>
        <option value="Postgraduate Certificate">
          Postgraduate Certificate
        </option>
        <option value="Postgraduate Diploma">Postgraduate Diploma</option>
        <option value="Masters Degree">Masters Degree</option>
        <option value="Doctoral/PhD">Doctoral/PhD</option>
      </select>
    </div>
  )
}
export default EducationLevelSelector
