import React from 'react'
import { Package } from '@/utils/Interface/PackageInterface'
import { Globe, DollarSign, Layers, Building2 } from 'lucide-react'
import { FeatureItem } from './FeatureItem'
import ConfirmPackagebutton from './ConfirmPackagebutton'
const SelectedPackage = ({ Package }: { Package: Package }) => {
  const FeaturedItemData = [
    {
      label: 'Application Fee Included',
      value: Package.Applicationfeeincluded,
    },
    { label: 'SOP/LOR Assistance', value: Package.SOP_LORAssistance },
    {
      label: 'Application Fee Included',
      value: Package.Applicationfeeincluded,
    },
    { label: 'Visa Assistance', value: Package.VisaAssistance },
    { label: 'IELTS Assistance', value: Package.IELTSAssistance },
    { label: 'University Shortlisting', value: Package.UniversityShortlisting },
    { label: 'Scholarship Assistance', value: Package.ScholarshipAssistance },
    { label: 'Post Visa Services', value: Package.PostVisaServices },
    {
      label: 'University Application Assistance',
      value: Package.UniversityApplicationAssistance,
    },
    {
      label: 'Visa Interview Preparation',
      value: Package.VisaInterviewPreparation,
    },
  ]
  return (
    <div className="p-4 w-full mx-auto flex flex-col justify-center items-center">
      <div className="bg-white rounded-2xl shadow-md p-6 grid gap-4 grid-cols-1 h-52 w-full overflow-y-scroll  ">
        {/* Basic Info */}
        <div className="flex items-center gap-2">
          <Globe className="text-blue-600" size={20} />
          <span className="font-semibold">Country:</span>
          <span>{Package.PackageCountry}</span>
        </div>
        <div className="flex items-center gap-2">
          <Layers className="text-purple-600" size={20} />
          <span className="font-semibold">Package Type:</span>
          <span>{Package.PackageType}</span>
        </div>
        <div className="flex items-center gap-2">
          <DollarSign className="text-green-600" size={20} />
          <span className="font-semibold">Price:</span>
          <span>PKR {Package.PackagePrice}</span>
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="text-yellow-600" size={20} />
          <span className="font-semibold">Universities:</span>
          <span>{Package.NumberOFUniversities}</span>
        </div>
        {/* Features List */}
        {FeaturedItemData.map((item) => (
          <FeatureItem key={item.label} label={item.label} value={item.value} />
        ))}
      </div>
      <ConfirmPackagebutton Package={Package} />
    </div>
  )
}
export default SelectedPackage
