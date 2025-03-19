import { getAllPackages } from '@/functions/Package/GetAllPackages'
import { Package } from '@/utils/Interface/PackageInterface'
import React, { useEffect, useState } from 'react'
import PackageLoader from './PackageLoader'
import SelectedPackage from './SelectedPackage'
const PackageSelection = () => {
  // State to store all packages fetched from the backend
  const [AllPackages, SetPackages] = useState<Package[]>([])
  // Loading state to manage loader display
  const [Loading, setLoading] = useState(true)
  // State to store selected country and type
  const [selectedCountry, setSelectedCountry] = useState<string>('')
  const [selectedType, setSelectedType] = useState<string>('')
  // State to store the filtered package that matches the selection
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null)
  // Fetch package data on component mount
  useEffect(() => {
    const GetPackageData = async () => {
      const Data = await getAllPackages()
      if (Data) {
        SetPackages(Data)
      }
      setLoading(false) // Hide loader after fetching
    }
    GetPackageData()
  }, [])
  // Filter package when both dropdowns have values
  useEffect(() => {
    if (selectedCountry && selectedType) {
      const matchedPackage = AllPackages.find(
        (pkg) =>
          pkg.PackageCountry === selectedCountry &&
          pkg.PackageType === selectedType
      )
      setSelectedPackage(matchedPackage || null) // Set package if match found
    }
  }, [selectedCountry, selectedType, AllPackages])
  // Extract unique country and type options
  const uniqueCountries = Array.from(
    new Set(AllPackages.map((pkg) => pkg.PackageCountry))
  )
  const uniqueTypes = Array.from(
    new Set(AllPackages.map((pkg) => pkg.PackageType))
  )
  return (
    <div className="p-4 space-y-6 w-full">
      <h2 className="text-2xl font-bold text-center text-indigo-600">
        Select a Package
      </h2>
      {Loading ? (
        <PackageLoader />
      ) : (
        <>
          {/* Dropdowns Section */}
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
          {/* Display Package Details */}
          {selectedPackage ? (
            <SelectedPackage Package={selectedPackage} />
          ) : selectedCountry && selectedType ? (
            <p className="text-red-500 mt-4 text-center">
              No package found matching your selection.
            </p>
          ) : null}
        </>
      )}
    </div>
  )
}
export default PackageSelection
