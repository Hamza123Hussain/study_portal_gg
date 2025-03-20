import { addPreferredCountry } from '@/utils/Redux/Slice/FormSlice'
import { RootState } from '@/utils/Redux/Store'

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CountrySelector: React.FC = () => {
  const dispatch = useDispatch()
  const formData = useSelector((state: RootState) => state.PersonalDetails)
  const [customCountry, setCustomCountry] = useState('')

  // Handle checkbox change
  const handleCheckboxChange = (country: string, checked: boolean) => {
    dispatch(addPreferredCountry({ country, add: checked }))
  }

  // Handle input change for the custom "Other" country
  const handleCustomCountryChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomCountry(e.target.value)
  }

  // Add custom country when the "Add Country" button is clicked
  const handleAddCustomCountry = () => {
    if (customCountry && !formData.preferredCountries.includes(customCountry)) {
      dispatch(addPreferredCountry({ country: customCountry, add: true }))
    }
    setCustomCountry('') // Clear input after adding
  }

  return (
    <div className="space-y-4">
      <label
        htmlFor="preferredCountry"
        className="block text-gray-700 font-semibold"
      >
        Preferred Countries
      </label>
      {/* Country checkboxes */}
      <div className=" items-center justify-start grid grid-cols-1 sm:grid-cols-2">
        {[
          'UK',
          'USA',
          'Canada',
          'Australia',
          'UAE',
          'Europe',
          'China',
          'New Zealand',
          'Russia',
          'Korea',
          'Other',
        ].map((country) => (
          <div key={country} className="flex items-center">
            <input
              type="checkbox"
              id={country}
              name="preferredCountries"
              checked={formData.preferredCountries.includes(country)}
              onChange={(e) => handleCheckboxChange(country, e.target.checked)}
              className="mr-2 text-nowrap"
            />
            <label htmlFor={country} className="text-gray-700">
              {country}
            </label>
          </div>
        ))}
      </div>

      {/* "Other" country input */}
      {/* <div className="mt-4">
        <input
          type="checkbox"
          id="otherCountry"
          checked={formData.preferredCountries.includes('Other')}
          onChange={(e) => handleCheckboxChange('Other', e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="otherCountry" className="text-gray-700">
          Other
        </label>
        {formData.preferredCountries.includes('Other') && (
          <div className="mt-4">
            <input
              type="text"
              id="otherCountryInput"
              value={customCountry}
              onChange={handleCustomCountryChange}
              placeholder="Enter Other Country"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <button
              onClick={handleAddCustomCountry}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Add Country
            </button>
          </div>
        )}
      </div> */}
    </div>
  )
}

export default CountrySelector
