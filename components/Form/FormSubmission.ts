import { createOrder } from '@/functions/Order/CreateAnOrder'
import createStudent from '@/functions/Students/NewStudentAdd'
import { FormData } from '@/utils/Interface/Main_Form_Interface'
import {
  RemoveCredentials,
  UpdateCredentials,
} from '@/utils/Redux/Slice/FlagSlice'
import { AppDispatch } from '@/utils/Redux/Store'
import toast from 'react-hot-toast'
export const FormSubmitted = async (
  formData: FormData,
  Dispatch: AppDispatch,
  User: any,
  Cart: string,
  PackageID: string,
  Router: any
) => {
  Dispatch(UpdateCredentials())
  try {
    const formfilled = await createStudent(formData)
    if (formfilled) {
      Dispatch(RemoveCredentials())
      const OrderPlaced = await createOrder({
        Name: User.Name,
        Email: User.Email,
        userId: User._id,
        Cart,
        PackageID,
      })
      if (OrderPlaced) {
        Router.push(`/GetOrder/${OrderPlaced.OrderId}`)
      }
    }
  } catch (error) {
    console.error('Failed to create student:', error)
    toast.error('Form Has Not Been Submitted. Duplication Error')
  }
}
