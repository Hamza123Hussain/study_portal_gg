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
    <div className="bg-white mt-5 ">
      <h2 className="text-3xl font-bold text-blue-800 mb-6 flex items-center gap-2">
        <Package2 size={28} /> Package Details
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-sm">
        <p>
          <span className="font-semibold">Country:</span>{' '}
          {Package.PackageCountry}
        </p>
        <p>
          <span className="font-semibold">Type:</span> {Package.PackageType}
        </p>
        <p>
          <span className="font-semibold">Price:</span> {Package.PackagePrice}
        </p>
        <p>
          <span className="font-semibold">Universities Covered:</span>{' '}
          {Package.NumberOFUniversities}
        </p>
        {CheckList.map((item, idx) => (
          <p key={idx}>
            <span className="font-semibold">{item.Label}</span>
            {renderBoolean(item.Value)}
          </p>
        ))}
      </div>
    </div>
  )
}
export default CompletePackageDetails
