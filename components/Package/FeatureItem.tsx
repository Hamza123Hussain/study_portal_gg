import { CheckCircle, XCircle } from 'lucide-react'

export const FeatureItem = ({
  label,
  value,
}: {
  label: string
  value: boolean
}) => (
  <div className="flex items-center gap-2">
    {value ? (
      <CheckCircle className="text-green-500" size={20} />
    ) : (
      <XCircle className="text-red-500" size={20} />
    )}
    <span>{label}</span>
  </div>
)
