import { useState } from "react"
import OnboardingStepsStyle from "./OnboardingStepsStyle"
import OnboardingStepOne from "../OnboardingStepOne/OnboardingStepOne"
import OnboardingStepTwo from "../OnboardingStepTwo/OnboardingStepTwo"

const OnboardingSteps = () => {
  const [step, setStep] = useState("one")


    
  return (
    <OnboardingStepsStyle>

        <div>OnboardingSteps</div>
    </OnboardingStepsStyle>
  )
}

export default OnboardingSteps