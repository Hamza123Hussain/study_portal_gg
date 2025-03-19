import Step1 from '@/components/Form/Steps/Step1'
import Step2 from '@/components/Form/Steps/Step2'
import Step3 from '@/components/Form/Steps/Step3'
import Step4 from '@/components/Form/Steps/Step4'
import Step5 from '@/components/Form/Steps/Step5'
export const renderStepContent = (currentStep: number) => {
  switch (currentStep) {
    case 1:
      return <Step1 />
    case 2:
      return <Step2 />
    case 3:
      return <Step3 />
    case 4:
      return <Step4 />
    case 5:
      return <Step5 />
    default:
      return null
  }
}
