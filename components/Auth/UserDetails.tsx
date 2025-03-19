import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog' // Import from your custom component library

import { useSelector } from 'react-redux'
import ActionButtons from './ActionButtons'
import { RootState } from '@/utils/Redux/Store'
const UserDetailsModal = () => {
  const User = useSelector((state: RootState) => state.user)

  return (
    <Dialog>
      {/* Trigger button to open the dialog */}
      <DialogTrigger asChild>
        <button className="px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300 ease-in-out">
          {User.Name}
        </button>
      </DialogTrigger>
      {/* Dialog Content */}
      <DialogContent className="p-6 bg-white rounded-lg shadow-lg max-w-sm sm:max-w-md w-full mx-auto h-auto transform transition-transform duration-500 ease-in-out scale-95">
        {/* Modal Header */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Hello, {User.Name}!
          </h2>
          <p className="text-sm text-gray-600">{User.Email}</p>
        </div>
        {/* Actions */}
        <ActionButtons />
      </DialogContent>
    </Dialog>
  )
}
export default UserDetailsModal
