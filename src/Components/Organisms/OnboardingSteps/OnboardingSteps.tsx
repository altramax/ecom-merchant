import { useState } from "react";
import OnboardingStepsStyle from "./OnboardingStepsStyle";
import OnboardingStepOne from "../OnboardingStepOne/OnboardingStepOne";
import OnboardingStepTwo from "../OnboardingStepTwo/OnboardingStepTwo";
import { useNavigate } from "react-router-dom";

const OnboardingSteps = () => {
  const [step, setStep] = useState("stepone");
  const navigate = useNavigate()

  const changeStep = (evt: string) => {
    setStep(evt);
  };

  const skipHandler = () => {
    navigate("/dashboard");
  };

  return (
    <OnboardingStepsStyle>
      {step === "stepone" && (
        <OnboardingStepOne
          next={() => changeStep("stepTwo")}
          skip={skipHandler}
        />
      )}
      {step === "stepTwo" && <OnboardingStepTwo skip={skipHandler}/>}
    </OnboardingStepsStyle>
  );
};

export default OnboardingSteps;
