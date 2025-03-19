import { Package } from '@/utils/Interface/PackageInterface'
import React from 'react'
const Dropdowns = ({
  AllPackages,
  selectedCountry,
  setSelectedCountry,
  selectedType,
  setSelectedType,
}: {
  AllPackages: Package[]
  selectedCountry: string
  setSelectedCountry: (Country: string) => void
  selectedType: string
  setSelectedType: (Type: string) => void
}) => {
  const uniqueCountries = Array.from(
    new Set(AllPackages.map((pkg) => pkg.PackageCountry))
  )
  const uniqueTypes = Array.from(
    new Set(AllPackages.map((pkg) => pkg.PackageType))
  )
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Country Dropdown */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Select Country
        </label>
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="">-- Select Country --</option>
          {uniqueCountries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      {/* Package Type Dropdown */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Select Package Type
        </label>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="">-- Select Type --</option>
          {uniqueTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
export default Dropdowns
