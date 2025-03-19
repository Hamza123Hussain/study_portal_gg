// src/utils/handleFieldChange.ts
import { FormData } from '@/utils/Main_Form_Interface' // Adjust path as needed
import { updateField } from '@/utils/Redux/Slice/FormSlice'
import { AppDispatch } from '@/utils/Redux/Store/Store'
import React from 'react'

export const handleFieldChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  dispatch: AppDispatch,
  formData: FormData
) => {
  const { name, value } = e.target

  // Dispatch the update action to Redux store
  dispatch(updateField({ field: name as keyof typeof formData, value }))
}
