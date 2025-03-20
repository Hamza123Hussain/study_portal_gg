import { handleFieldChange } from '@/functions/Form/HandleField'
import { RootState } from '@/utils/Redux/Store'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
const Component: React.FC = () => {
  const dispatch = useDispatch()
  const formData = useSelector((state: RootState) => state.PersonalDetails)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    handleFieldChange(e, dispatch, formData)
  }
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Counseling Mode Dropdown */}
      <div className="mb-6">
        <label
          htmlFor="preferredCounselingMode"
          className="block text-gray-700 font-semibold mb-2"
        >
          Preferred Counseling Mode <span className="text-red-500">*</span>
        </label>
        <select
          id="preferredCounselingMode"
          name="preferredCounselingMode"
          value={formData.preferredCounselingMode}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Counseling Mode</option>
          <option value="In-Person">In-Person</option>
          <option value="Virtual Counselling">Virtual Counselling</option>
        </select>
      </div>
      {/* heardAboutUs Dropdown */}
      <div>
        <label
          htmlFor="heardAboutUs"
          className="block text-gray-700 font-semibold mb-2"
        >
          Where did you hear about us? <span className="text-red-500">*</span>
        </label>
        <select
          id="heardAboutUs"
          name="heardAboutUs"
          value={formData.heardAboutUs}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Source</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="Influencer">Influencer</option>
          <option value="Friend/Family">Friend/Family</option>
          <option value="University">University</option>
          <option value="Advertisement">Advertisement</option>
        </select>
      </div>
    </div>
  )
}
export default Component
