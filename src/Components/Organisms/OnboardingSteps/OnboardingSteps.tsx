import { useState } from "react";
import OnboardingStepsStyle from "./OnboardingStepsStyle";
import OnboardingStepOne from "../OnboardingStepOne/OnboardingStepOne";
import OnboardingStepTwo from "../OnboardingStepTwo/OnboardingStepTwo";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import { skipForNow } from "../../../Redux/StepForm";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../../Config/Config";
import NetworkStatus from "../../Molecule/NetworkStatus/NetworkStatus";

const OnboardingSteps = () => {
  const [step, setStep] = useState("stepOne");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  const changeStep = (evt: string) => {
    setStep(evt);
  };

  const skipHandler = async () => {
    const docRef = doc(db, "Merchant", auth.user.uid);
    await updateDoc(docRef, { skipForNow: "true" });
    dispatch(skipForNow("true"));
    navigate("/dashboard");
  };

  return (
    <OnboardingStepsStyle>
      <NetworkStatus/>
      {step === "stepOne" && (
        <OnboardingStepOne
          next={() => changeStep("stepTwo")}
          skip={skipHandler}
        />
      )}
      {step === "stepTwo" && <OnboardingStepTwo skip={skipHandler} back={()=>changeStep("stepOne")}/>}
    </OnboardingStepsStyle>
  );
};

export default OnboardingSteps;
