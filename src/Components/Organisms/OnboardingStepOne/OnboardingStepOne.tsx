import OnboardingStepOnestyle from "./OnboardingStepOneStyle";

type OnboardType = {
    next: Function,
    skip: Function
}

const OnboardingStepOne = ({} : OnboardType) => {
  return (
    <OnboardingStepOnestyle>

        <div>OnboardingStepOne</div>

       
    </OnboardingStepOnestyle>
  )
}

export default OnboardingStepOne