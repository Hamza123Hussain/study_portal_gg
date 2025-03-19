import { handleFieldChange } from '@/functions/Form/HandleField'
import { RootState } from '@/utils/Redux/Store/Store'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const AcademicLevelSelector: React.FC = () => {
  const dispatch = useDispatch()
  const formData = useSelector((state: RootState) => state.FormSlice)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    handleFieldChange(e, dispatch, formData)
  }
  return (
    <div className="space-y-4">
      <label
        htmlFor="academicLevel2"
        className="block text-gray-700 font-semibold"
      >
        Academic Level 2 <span className="text-red-500">*</span>
      </label>
      <select
        id="academicLevel2"
        name="academicLevel2"
        value={formData.academicLevel2}
        onChange={handleChange}
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
      >
        <option value="">Select Academic Level 2</option>
        <option value="Fsc Pre Medical">Fsc Pre Medical</option>
        <option value="Fsc Pre Engineering">Fsc Pre Engineering</option>
        <option value="ICS Statistics">ICS Statistics</option>
        <option value="ICS Physics">ICS Physics</option>
        <option value="I.Com">I.Com</option>
        <option value="Alevels">Alevels</option>
      </select>
    </div>
  )
}

export default AcademicLevelSelector
