import { useDispatch, useSelector } from 'react-redux'
import CountrySelector from '@/components/FormDetails/countryselect'
import React, { useState } from 'react'
import { handleFieldChange } from '@/functions/Form/HandleField'
import { RootState } from '@/utils/Redux/Store'
const Step1: React.FC = () => {
  const dispatch = useDispatch()
  const formData = useSelector((state: RootState) => state.PersonalDetails)
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({})
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    handleFieldChange(e, dispatch, formData)
    // Clear errors as the user types
    if (value.trim() !== '') {
      setErrors((prev) => ({ ...prev, [name]: false }))
    }
  }
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:outline-none ${
              errors.name
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-green-500'
            }`}
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">Name is required.</p>
          )}
        </div>
        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:outline-none ${
              errors.email
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-green-500'
            }`}
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">Email is required.</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Phone Number Field */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:outline-none ${
              errors.phone
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-green-500'
            }`}
          />
          {errors.phone && (
            <p className="text-sm text-red-500 mt-1">Phone is required.</p>
          )}
        </div>

        {/* Address Field */}
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address <span className="text-red-500">*</span>
          </label>
          <input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none border-gray-300"
          />
        </div>
      </div>
      <div>
        {/* Country Selector */}
        <CountrySelector />
      </div>
      <div>
        {/* City Field */}
        <label
          htmlFor="city"
          className="block text-sm font-medium text-gray-700"
        >
          City <span className="text-red-500">*</span>
        </label>
        <input
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Enter your city"
          className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:outline-none ${
            errors.city
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:ring-green-500'
          }`}
        />
        {errors.city && (
          <p className="text-sm text-red-500 mt-1">City is required.</p>
        )}
      </div>
    </div>
  )
}
export default Step1
