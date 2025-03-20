import { handleFieldChange } from '@/functions/Form/HandleField'
import { RootState } from '@/utils/Redux/Store'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const FormComponent: React.FC = () => {
  const dispatch = useDispatch()
  const formData = useSelector((state: RootState) => state.PersonalDetails)

  // Default values for the fields
  const languageTest = formData.languageTest || '' // Ensuring value exists
  const languageTestScore = formData.languageTestScore || '' // Ensuring value exists
  const budget = formData.budget || '' // Ensuring value exists

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    handleFieldChange(e, dispatch, formData)
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Language Test Dropdown */}
      <div className="mb-6">
        <label
          htmlFor="languageTest"
          className="block text-gray-700 font-semibold mb-2"
        >
          Language Test <span className="text-red-500">*</span>
        </label>
        <select
          id="languageTest"
          name="languageTest"
          value={languageTest} // Ensure it has the value from state
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Language Test</option>
          <option value="IELTS">IELTS</option>
          <option value="PTE">PTE</option>
          <option value="TOFEL">TOFEL</option>
          <option value="SAT">SAT</option>
          <option value="DUOLINGO">DUOLINGO</option>
          <option value="None">None</option>
        </select>
      </div>

      {/* Test Score Field (Visible only when IELTS or PTE is selected, and not "None") */}
      {languageTest !== 'None' && languageTest !== '' && (
        <div className="mb-6">
          <label
            htmlFor="languageTestScore"
            className="block text-gray-700 font-semibold mb-2"
          >
            Test Score <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="languageTestScore"
            name="languageTestScore"
            value={languageTestScore || ''} // Ensure it has the value from state
            onChange={handleChange}
            placeholder="Enter your test score"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      )}

      {/* Budget Dropdown */}
      <div>
        <label
          htmlFor="budget"
          className="block text-gray-700 font-semibold mb-2"
        >
          Average Budget (PKR) <span className="text-red-500">*</span>
        </label>
        <select
          id="budget"
          name="budget"
          value={budget} // Ensure it has the value from state
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Budget Range</option>
          <option value="Less Than 25 Lakhs">Less Than 25 Lakhs</option>
          <option value="25-30 Lakhs">25 Lakhs to 30 Lakhs</option>
          <option value="30-35 Lakhs">30 Lakhs to 35 Lakhs</option>
          <option value="35-40 Lakhs">35 Lakhs to 40 Lakhs</option>
          <option value="40-45 Lakhs">40 Lakhs to 45 Lakhs</option>
          <option value="45-50 Lakhs">45 Lakhs to 50 Lakhs</option>
        </select>
      </div>
    </div>
  )
}

export default FormComponent
