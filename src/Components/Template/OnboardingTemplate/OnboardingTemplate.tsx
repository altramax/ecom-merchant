import OnboardingTemplateStyle from "./OnboardingTemplateStyle";
import OnboardingSlider from "../../Organisms/OnboardingSlider/OnboardingSlider";
import SignInModal from "../../Organisms/SignInModal/SignInModal";
import SignUpModal from "../../Organisms/SignUpModal/SignUpModal";
import { useState } from "react";

const OnboardingTemplate = () => {
  const [access, setAccess] = useState<string>("signin");

  const accessHandler = (evt: string) => {
    setAccess(evt);
  };

  return (
    <OnboardingTemplateStyle>
      <div className="onboarding__container">
        <div className="slider">
          <OnboardingSlider />
        </div>
        <div className="login">
          {access === "signin" ? (
            <SignInModal signUp={() => accessHandler("signup")} />
          ) : null}
          {access === "signup" ? (
            <SignUpModal signIn={() => accessHandler("signin")} />
          ) : null}
        </div>
      </div>
    </OnboardingTemplateStyle>
  );
};

export default OnboardingTemplate;
