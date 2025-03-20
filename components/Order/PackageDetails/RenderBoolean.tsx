import { Check, X } from 'lucide-react'

export const renderBoolean = (value: boolean) => (
  <span
    className={`flex items-center gap-1 ${
      value ? 'text-green-600' : 'text-red-600'
    }`}
  >
    {value ? <Check size={16} /> : <X size={16} />} {value ? 'Yes' : 'No'}
  </span>
)
