import OnboardingTemplateStyle from "./OnboardingTemplateStyle";
import OnboardingSlider from "../../Organisms/OnboardingSlider/OnboardingSlider";
import SignInModal from "../../Organisms/SignInModal/SignInModal";
import SignUpModal from "../../Organisms/SignUpModal/SignUpModal";
import { useEffect, useState } from "react";
// import { useAppDispatch, useAppSelector} from "../../../Redux/Hooks";
import NetworkStatus from "../../Molecule/NetworkStatus/NetworkStatus";
import { clearErrors } from "../../../Redux/AlertSlice";

const OnboardingTemplate = () => {
  const [access, setAccess] = useState<string>("signin");
  const [mobileScreen, setMobileScreen] = useState<string>("slider")

  
  useEffect(()=>{
    // handlerAlert()
  },[])

  const accessHandler = (evt: string) => {
    setAccess(evt);
  };

  const mobileScreenHandler = (evt: string)=>{
     setMobileScreen(evt)
  }

  // const handlerAlert = ()=>{
  //   if(alert.message === "You are back Online"){
  //     setTimeout(() => {
  //       dispatch(clearErrors())
  //     }, 3000);
  //   }
  // }
  


  // console.log(alert.message);

  return (
    <OnboardingTemplateStyle>
  <NetworkStatus/>

      
      <div className="onboarding__container">
        <div className={`slider ${mobileScreen === "slider" ? "shown" : "hidden"}`} >
          <p className="skip" onClick={()=> mobileScreenHandler("login")}>Skip</p>
          <OnboardingSlider slider={()=>mobileScreenHandler("login")}/>
        </div>
        <div className={`login ${mobileScreen === "login" ? "shown" : "hidden"}`} >
          <p className="previous"  onClick={()=> mobileScreenHandler("slider")}>Previus</p>
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
