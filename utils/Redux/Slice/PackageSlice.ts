import { Package } from '@/utils/Interface/PackageInterface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
const initialState: Package = {
  _id: '',
  PackageCountry: '',
  PackagePrice: '',
  PackageType: '',
  NumberOFUniversities: '',
  Applicationfeeincluded: false,
  VisaAssistance: false,
  SOP_LORAssistance: false,
  IELTSAssistance: false,
  UniversityShortlisting: false,
  ScholarshipAssistance: false,
  PostVisaServices: false,
  UniversityApplicationAssistance: false,
  VisaInterviewPreparation: false,
}
export const PackageSlice = createSlice({
  name: 'Package',
  initialState,
  reducers: {
    SetPackageData: (state, action: PayloadAction<any>) => {
      return action.payload // Replace state with the new cart data
    },
  },
})
export const { SetPackageData } = PackageSlice.actions
export default PackageSlice.reducer
