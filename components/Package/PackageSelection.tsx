import { getAllPackages } from '@/functions/Package/GetAllPackages'
import { Package } from '@/utils/Interface/PackageInterface'
import React, { useEffect, useState } from 'react'
import SelectedPackage from './SelectedPackage'
import Dropdowns from './Dropdowns'
const PackageSelection = () => {
  // State to store all packages fetched from the backend
  const [AllPackages, SetPackages] = useState<Package[]>([])
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
  return (
    <div className="p-4 space-y-6 w-full">
      <h2 className="text-2xl font-bold text-center text-indigo-600">
        Select a Package
      </h2>
      {
        <>
          {/* Dropdowns Section */}
          <Dropdowns
            AllPackages={AllPackages}
            setSelectedCountry={setSelectedCountry}
            setSelectedType={setSelectedType}
            selectedType={selectedType}
            selectedCountry={selectedCountry}
          />
          {/* Display Package Details */}
          {selectedPackage ? (
            <SelectedPackage Package={selectedPackage} />
          ) : selectedCountry && selectedType ? (
            <p className="text-red-500 mt-4 text-center">
              No package found matching your selection.
            </p>
          ) : null}
        </>
      }
    </div>
  )
}
export default PackageSelection
