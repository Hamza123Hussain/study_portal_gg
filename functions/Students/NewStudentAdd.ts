import { APIURL, FormData } from '@/utils/Interface/Main_Form_Interface'
import axios from 'axios'

const createStudent = async (studentData: FormData) => {
  try {
    const response = await axios.post(
      `${APIURL}Api/Student/NewStudent`,
      studentData
    )
    if (response.status === 201) {
      // console.log('Student created successfully:', response.data)
      return response.data
    }
  } catch (error: any) {
    console.error('Error creating student:', error.response?.data || error)
    if (error.response?.status === 400) {
      throw new Error('Duplicate entry. Student already exists.')
    }
    throw new Error('An unexpected error occurred.')
  }
}

export default createStudent
