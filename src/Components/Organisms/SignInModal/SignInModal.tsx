import SignInModalStyle from "./SignInModalStyle";
import google_Icon from "../../../assets/Icons/google.svg";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import { useEffect, useState } from "react";
import {
  userLogin,
  googleLogin,
  resetAuthMessage,
} from "../../../Redux/AuthSlice";
import { useNavigate } from "react-router-dom";
import eyes_closed from "../../../assets/Icons/eye_closed.svg";
import eyes_open from "../../../assets/Icons/eye_open.svg";
import Button from "../../Molecule/Button/Button";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../Config/Config";

type fieldsType = {
  email: string;
  password: string;
};

type signinType = {
  signUp: any;
};

const SignInModal = ({ signUp }: signinType): JSX.Element => {
  const color = useAppSelector((state) => state.color);
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [completedProfile, setCompletedProfile] = useState<any>(null)
  const [eyes, setEyes] = useState<boolean>(false);
  const [fields, setFields] = useState<fieldsType>({
    email: "",
    password: "",
  });

  useEffect(() => {
    window.addEventListener("beforeunload", resetErrorMesageHandler);
   auth.user !== null && StoreDetails();
  completedProfile !== null && loginParameters()
  }, [auth.user, completedProfile]);

  const loginParameters = ()=>{
    if (
      auth.user !== null &&
      auth.user.emailVerified &&
      completedProfile === "true" || completedProfile === "completed"
    ) {
      navigate("/dashboard");
    } else if (
      auth.user !== null &&
      auth.user.emailVerified &&
      !completedProfile
    ) {
      navigate("/onboardingsteps");
    }
  }

 const StoreDetails =  async () => {
    const CollectionRef = doc(db, "Merchant", auth.user.uid);
    const data = await getDoc(CollectionRef);
    if(data.exists()){
      setCompletedProfile(data.data().skipForNow)
    }else if (!data.exists()){
      setCompletedProfile("completed")
    }
  };


  

  const onchange = async (name: string, value: string) => {
    const fieldsValue: any = Object.assign({}, fields);
    fieldsValue[name] = value;
    await setFields(fieldsValue);
  };

  const signInWithEmail = async (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => { 
    evt.preventDefault();
    await dispatch(userLogin(fields))
    
  };

  const signInWithGoogle = async (
    evt: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    evt.preventDefault();
    await dispatch(googleLogin())
  };

  const passwordVisibility = (evt: boolean) => {
    setEyes(evt);
  };

  const resetErrorMesageHandler = (evt: any) => {
    dispatch(resetAuthMessage());
    console.log("triggered");
  };

  return (
    <SignInModalStyle>
      <form id={color.mode} className={`signin__form`}>
        <div className="signin">
          <div className="signin__header">
            <h3>Welcome Back</h3>
          </div>
          <div className="signin__body">
            <div className="signin__inputs">
              <div className="input__group">
                <input
                  className="input"
                  type="text"
                  placeholder="Your Email"
                  name="email"
                  onChange={(evt) => {
                    onchange(evt.target.name, evt.target.value);
                  }}
                />
                {auth.performedAction === "signin" &&
                auth.message.includes("email") ? (
                  <small className="small">{auth.message}</small>
                ) : null}
              </div>

              <div className="password__group">
                <div className="input__group">
                  <input
                    className="input"
                    type={eyes === true ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    onChange={(evt) => {
                      onchange(evt.target.name, evt.target.value);
                    }}
                  />
                  {(auth.performedAction === "signin" &&
                    auth.message.includes("password")) ||
                  auth.message.includes("credential") ? (
                    <small className="small">{auth.message}</small>
                  ) : null}
                </div>
                <div className="eyes__group">
                  <img
                    src={eyes_closed}
                    alt=""
                    className={eyes === false ? "visible" : "hidden"}
                    onClick={() => passwordVisibility(true)}
                  />
                  <img
                    src={eyes_open}
                    alt=""
                    className={eyes === true ? "visible" : "hidden"}
                    onClick={() => passwordVisibility(false)}
                  />
                </div>
              </div>
            </div>

            <Button
              Click={signInWithEmail}
              value="Signin"
              type="submit"
              className="button"
            />

            <div className="signin__dash">
              <div>——————</div>
              <p>or</p>
              <div>——————</div>
            </div>

            <div
              className="signin__body__googlelogin"
              onClick={signInWithGoogle}
            >
              <img src={google_Icon} alt="google Icon" />
              <p>Signin with Google</p>
            </div>

            <p className="signup">
              Don't have an account ? <span onClick={signUp}> Signup</span>
            </p>
          </div>
        </div>
      </form>
    </SignInModalStyle>
  );
};

export default SignInModal;
