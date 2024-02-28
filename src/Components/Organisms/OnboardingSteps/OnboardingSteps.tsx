import { useState } from "react"
import OnboardingStepsStyle from "./OnboardingStepsStyle"
import OnboardingStepOne from "../OnboardingStepOne/OnboardingStepOne"
import OnboardingStepTwo from "../OnboardingStepTwo/OnboardingStepTwo"

const OnboardingSteps = () => {
  const [step, setStep] = useState("stepone");

  const changeStep = (evt:string)=>{
    
   setStep(evt)
  }


 console.log(step);
    
  return (
    <OnboardingStepsStyle>

      {step === "stepone" && <OnboardingStepOne next={()=>changeStep("stepTwo")}/>}
      {step === "stepTwo" && <OnboardingStepTwo/>}
  
        
        


    </OnboardingStepsStyle>
  )
}

export default OnboardingSteps