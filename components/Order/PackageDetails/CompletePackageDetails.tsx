import { Package } from '@/utils/Interface/PackageInterface'
import { Package2 } from 'lucide-react'
import React from 'react'
import { renderBoolean } from './RenderBoolean'
const CompletePackageDetails = ({ Package }: { Package: Package }) => {
  const CheckList = [
    {
      Label: 'Application Fee Included',
      Value: Package.Applicationfeeincluded,
    },
    { Label: 'Visa Assistance', Value: Package.VisaAssistance },
    { Label: 'SOP & LOR Assistance', Value: Package.SOP_LORAssistance },
    { Label: 'IELTS Assistance', Value: Package.IELTSAssistance },
    { Label: 'University Shortlisting', Value: Package.UniversityShortlisting },
    { Label: 'Scholarship Assistance', Value: Package.ScholarshipAssistance },
    { Label: 'Post Visa Services', Value: Package.PostVisaServices },
    {
      Label: 'University Application Assistance',
      Value: Package.UniversityApplicationAssistance,
    },
    {
      Label: 'Visa Interview Preparation',
      Value: Package.VisaInterviewPreparation,
    },
  ]
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 mt-6 transition-transform hover:scale-[1.02]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Package2 size={28} className="text-blue-600" />
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-800">
          Package Details
        </h2>
      </div>
      {/* Divider */}
      <div className="border-b border-gray-200 mb-4" />
      {/* General Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 text-gray-700 text-base mb-6">
        <div className="flex flex-col bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm hover:shadow-md transition duration-150">
          <span className="text-sm font-medium text-blue-700 mb-1">
            Country
          </span>
          <span className="text-lg font-semibold text-gray-800">
            {Package.PackageCountry || 'N/A'}
          </span>
        </div>
        <div className="flex flex-col bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm hover:shadow-md transition duration-150">
          <span className="text-sm font-medium text-blue-700 mb-1">Type</span>
          <span className="text-lg font-semibold text-gray-800">
            {Package.PackageType || 'N/A'}
          </span>
        </div>
        <div className="flex flex-col bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm hover:shadow-md transition duration-150">
          <span className="text-sm font-medium text-blue-700 mb-1">Price</span>
          <span className="text-lg font-semibold text-gray-800">
            {Package.PackagePrice || 'N/A'}
          </span>
        </div>
        <div className="flex flex-col bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm hover:shadow-md transition duration-150">
          <span className="text-sm font-medium text-blue-700 mb-1">
            Universities Applications
          </span>
          <span className="text-lg font-semibold text-gray-800">
            {Package.NumberOFUniversities || 'N/A'}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b border-gray-200 mb-4" />
      {/* Services Checklist */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CheckList.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200 hover:bg-blue-50 transition duration-150"
          >
            <span className="text-gray-800 font-medium">{item.Label}</span>
            <span>{renderBoolean(item.Value)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
export default CompletePackageDetails
