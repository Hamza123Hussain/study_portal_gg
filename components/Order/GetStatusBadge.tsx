import { CheckCircle, Clock, XCircle } from 'lucide-react'

export const getStatusBadge = (status: string) => {
  if (status === 'Pending') {
    return (
      <span className="flex items-center gap-1 text-yellow-600 font-medium">
        <Clock size={16} /> Pending
      </span>
    )
  } else if (status === 'Completed') {
    return (
      <span className="flex items-center gap-1 text-green-600 font-medium">
        <CheckCircle size={16} /> Completed
      </span>
    )
  } else {
    return (
      <span className="flex items-center gap-1 text-red-600 font-medium">
        <XCircle size={16} /> Failed
      </span>
    )
  }
}
