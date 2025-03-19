import Component from '@/components/FormDetails/mix'
import { handleFieldChange } from '@/functions/Form/HandleField'
import { RootState } from '@/utils/Redux/Store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
const Step4: React.FC = () => {
  const dispatch = useDispatch()
  const formData = useSelector((state: RootState) => state.PersonalDetails)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    handleFieldChange(e, dispatch, formData)
  }
  return (
    <div className="space-y-4">
      <input
        name="visaHistory"
        value={formData.visaHistory}
        onChange={handleChange}
        placeholder="Visa History"
        className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
      />
      <Component />
    </div>
  )
}
export default Step4
