import OnboardingTemplateStyle from "../Components/Template/OnboardingTemplate/OnboardingTemplateStyle";
import OnboardingSlider from "../Components/Organisms/OnboardingSlider/OnboardingSlider";
import SignInModal from "../Components/Organisms/SignInModal/SignInModal";
import SignUpModal from "../Components/Organisms/SignUpModal/SignUpModal";
import { useState } from "react";
import NetworkStatus from "../Components/Molecule/NetworkStatus/NetworkStatus";
import { useAppSelector } from "./Hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OnboardingTemplate = () => {
  const [access, setAccess] = useState<string>("signin");
  const [mobileScreen, setMobileScreen] = useState<string>("slider");
  const color = useAppSelector((state) => state.color);
  const user = useAppSelector((state) => state.auth.user);
  const profileCompleted = useAppSelector((state) => state.stepForm.skipForNow);
  const navigate = useNavigate();


  useEffect(() => {
    if (user !== null && profileCompleted === false) {
      navigate("/onboardingsteps");
    } else if (user !== null && profileCompleted === true) {
      navigate("/dashboard");
    }
  },[user]);


  const accessHandler = (evt: string) => {
    setAccess(evt);
  };

  const mobileScreenHandler = (evt: string) => {
    setMobileScreen(evt);
  };

  return (
    <OnboardingTemplateStyle>
      <NetworkStatus />

      <div id={color.mode} className='onboarding__container'>
        <div
          className={`slider ${mobileScreen === "slider" ? "shown" : "hidden"}`}
        >
          {access === "signup" ? null : (
            <p className='skip' onClick={() => mobileScreenHandler("login")}>
              Skip
            </p>
          )}
          <OnboardingSlider slider={() => mobileScreenHandler("login")} />
        </div>
        <div
          className={`login ${mobileScreen === "login" ? "shown" : "hidden"}`}
        >
          <p className='previous' onClick={() => mobileScreenHandler("slider")}>
            Previus
          </p>
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
