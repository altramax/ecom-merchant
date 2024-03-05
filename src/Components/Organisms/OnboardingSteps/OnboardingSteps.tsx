import { useState } from "react";
import OnboardingStepsStyle from "./OnboardingStepsStyle";
import OnboardingStepOne from "../OnboardingStepOne/OnboardingStepOne";
import OnboardingStepTwo from "../OnboardingStepTwo/OnboardingStepTwo";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../Redux/Hooks";
import { skipForNow } from "../../../Redux/StepForm";

const OnboardingSteps = () => {
  const [step, setStep] = useState("stepone");
  const navigate = useNavigate()
  const dispatch = useAppDispatch();

  const changeStep = (evt: string) => {
    setStep(evt);
  };

  const skipHandler = () => {
    dispatch(skipForNow("true"))
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
