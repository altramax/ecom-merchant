import VerifyEmailModalStyle from "./VerifyEmailModalStyle";
import mailSent from "../../../assets/Icons/mail_sent.svg";
import mailApproved from "../../../assets/Icons/mail_approved.svg";
import { useAppSelector } from "../../../Redux/Hooks";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../Redux/Hooks";
import { tempAuth } from "../../../Redux/AuthSlice";

const VerifyEmailModal = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  const [icon, setIcon] = useState<number>(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.user === null) {
      setIcon(1);
      login();
    } else if (auth.user !== null) {
      setIcon(2);
    }
  }, [auth.user]);

  console.log(auth.user);

  
  

  
  const login = async () => {
    const reloadinterval = 
    setInterval(async () => {
      await auth.holdAuth.reload();
      console.log("interval ran");
      if (auth.holdAuth.emailVerified !== false) {
        dispatch(tempAuth());
        clearInterval(reloadinterval)
      }
    }, 5000);



    console.log(auth.holdAuth);
    console.log("auth reload", auth.user);
  };

 

  const loginHandler = () => {
    navigate("/dashboard");
  };

  return (
    <VerifyEmailModalStyle>
      <div className="verify__mail__container">
        <div className="verify__mail__images">
          {icon === 1 && <img src={mailSent} alt="email" />}
          {icon === 2 && <img src={mailApproved} alt="email" />}
        </div>
        {icon === 1 && <div>Please verify your email and login here</div>}
        {icon === 2 && <button onClick={loginHandler}>Open Mail</button>}
      </div>
    </VerifyEmailModalStyle>
  );
};

export default VerifyEmailModal;
