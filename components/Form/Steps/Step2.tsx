import AcademicLevelSelector from '@/components/FormDetails/Alevel2'
import DegreeDetails from '@/components/FormDetails/Degree'
import { handleFieldChange } from '@/functions/Form/HandleField'
import { RootState } from '@/utils/Redux/Store'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Step2: React.FC = () => {
  const dispatch = useDispatch()
  const formData = useSelector((state: RootState) => state.PersonalDetails)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    handleFieldChange(e, dispatch, formData)
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6">
        {/* Academic Level 1 */}
        <div>
          <label
            htmlFor="academicLevel1"
            className="block text-sm font-medium text-gray-700"
          >
            Academic Level 1 <span className="text-red-500">*</span>
          </label>
          <select
            id="academicLevel1"
            name="academicLevel1"
            value={formData.academicLevel1}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none border-gray-300"
          >
            <option value="">Select Academic Level 1</option>
            <option value="Matric">Matric</option>
            <option value="O-Levels">O-Levels</option>
          </select>
        </div>

        {/* Level 1 Marks */}
        <div>
          <label
            htmlFor="level1Marks"
            className="block text-sm font-medium text-gray-700"
          >
            Level 1 Marks <span className="text-red-500">*</span>
          </label>
          <input
            id="level1Marks"
            name="level1Marks"
            value={formData.level1Marks}
            onChange={handleChange}
            placeholder="Enter Level 1 Marks"
            required
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none border-gray-300"
          />
        </div>
      </div>

      <div className="grid grid-cols-1  gap-6">
        {/* Level 1 Year */}
        <div>
          <label
            htmlFor="level1Year"
            className="block text-sm font-medium text-gray-700"
          >
            Level 1 Year <span className="text-red-500">*</span>
          </label>
          <input
            id="level1Year"
            name="level1Year"
            value={formData.level1Year}
            onChange={handleChange}
            placeholder="Enter Level 1 Year"
            required
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none border-gray-300"
          />
        </div>

        {/* Academic Level 2 */}
        <div>
          <AcademicLevelSelector />
        </div>
      </div>

      <div className="grid grid-cols-1  gap-6">
        {/* Level 2 Marks */}
        <div>
          <label
            htmlFor="level2Marks"
            className="block text-sm font-medium text-gray-700"
          >
            Level 2 Marks <span className="text-red-500">*</span>
          </label>
          <input
            id="level2Marks"
            name="level2Marks"
            value={formData.level2Marks}
            onChange={handleChange}
            placeholder="Enter Level 2 Marks"
            required
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none border-gray-300"
          />
        </div>

        {/* Level 2 Year */}
        <div>
          <label
            htmlFor="level2Year"
            className="block text-sm font-medium text-gray-700"
          >
            Level 2 Year <span className="text-red-500">*</span>
          </label>
          <input
            id="level2Year"
            name="level2Year"
            value={formData.level2Year}
            onChange={handleChange}
            placeholder="Enter Level 2 Year"
            required
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none border-gray-300"
          />
        </div>
      </div>

      {/* Degree Details */}
      <div>
        <DegreeDetails />
      </div>
    </div>
  )
}

export default Step2
