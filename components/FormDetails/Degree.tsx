import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/utils/Redux/Store/Store'
import { handleFieldChange } from '@/functions/Form/HandleField'
const DegreeDetails: React.FC = () => {
  const dispatch = useDispatch()
  const formData = useSelector((state: RootState) => state.FormSlice)
  // Handler to update form data in Redux store
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    handleFieldChange(e, dispatch, formData)
  }
  // Define the education details array
  const educationDetails = [
    {
      label: 'BACHELOR DEGREE',
      value: formData.bachelorDegree,
      name: 'bachelorDegree',
    },
    {
      label: 'BACHELOR C G P A',
      value: formData.bachelorCGPA,
      name: 'bachelorCGPA',
    },
    {
      label: 'BACHELOR YEAR',
      value: formData.bachelorYear,
      name: 'bachelorYear',
    },
    {
      label: 'MASTER DEGREE',
      value: formData.masterDegree,
      name: 'masterDegree',
    },
    { label: 'MASTER C G P A', value: formData.masterCGPA, name: 'masterCGPA' },
    { label: 'MASTER YEAR', value: formData.masterYear, name: 'masterYear' },
  ]
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-xl">Education Details</h3>
      <div className="space-y-2">
        {educationDetails.map(({ label, value, name }) => (
          <div key={name} className="flex flex-col justify-between">
            <strong>{label}</strong>
            <input
              type="text"
              name={name}
              value={value || ''}
              onChange={handleChange}
              placeholder="Enter value"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
export default DegreeDetails
