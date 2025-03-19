import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog' // Import from your custom component library
import { useState } from 'react'
import SubmitButton from './SubmitButton'
import Form from './Form'
import ToggleButton from './ToggleButton'
const AuthModal = () => {
  const [isLogin, setIsLogin] = useState(true) // State to toggle between Login and Signup
  return (
    <Dialog>
      {/* Trigger button to open the dialog */}
      <DialogTrigger asChild>
        <button className=" px-4 py-1 bg-yellow-500 text-white rounded-lg hover:bg-blue-600">
          Login
        </button>
      </DialogTrigger>
      {/* Dialog content */}
      <DialogContent className="p-6 bg-white rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle>{isLogin ? 'Login' : 'Sign Up'}</DialogTitle>
          <DialogDescription>
            {isLogin
              ? 'Please log in to your account.'
              : 'Create a new account to get started.'}
          </DialogDescription>
        </DialogHeader>
        {/* Toggle between Login and Signup */}
        <ToggleButton isLogin={isLogin} setIsLogin={setIsLogin} />
        {/* Form for Login or Signup */}
        <Form isLogin={isLogin} />
        {/* Submission Button */}
        <SubmitButton isLogin={isLogin} />
      </DialogContent>
    </Dialog>
  )
}
export default AuthModal
