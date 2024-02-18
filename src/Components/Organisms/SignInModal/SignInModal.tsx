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
  const errorMessage = useAppSelector((state) => state.alert);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [eyes, setEyes] = useState<boolean>(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [fields, setFields] = useState<fieldsType>({
    email: "",
    password: "",
  });

  useEffect(() => {
    window.addEventListener("beforeunload", resetErrorMesageHandler);

    if (auth.user !== null && auth.profileCompleted === true) {
      navigate("/dashboard");
      console.log(auth.user);
    }
    // } else if (
    //   auth.user !== null &&
    //   auth.user.emailVerified !== false &&
    //   auth.profileCompleted === false
    // ) {
    //   navigate("/onboardingsteps");
    else if (auth.user === null && auth.performedAction === "signin") {
      handlerErrorMessage();
      console.log(auth.message);
    }
  }, [auth.user, auth.message]);

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
      .then(() => {})
      .then(() => handlerErrorMessage());
    // handlerErrorMessage();
  };

  const signInWithGoogle = async (
    evt: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    evt.preventDefault();
    await dispatch(googleLogin());
  };

  const passwordVisibility = (evt: boolean) => {
    setEyes(evt);
  };

  const resetErrorMesageHandler = (evt: any) => {
    dispatch(resetAuthMessage());
    console.log("triggered");
  };

  const handlerErrorMessage = async () => {
    if (auth.message.includes("email")) {
      console.log("enter email");
      setEmailError(auth.message);
    } else if (
      auth.message.includes("password") ||
      auth.message.includes("credential")
    ) {
      console.log("enter password");
      console.log(auth.message);
      setPasswordError(auth.message);
    }

    if (auth.message.includes("email") === false) {
      setEmailError("");
    } else if (
      auth.message.includes("password") === false ||
      auth.message.includes("credential") === false
    ) {
      setPasswordError("");
    }
  };

  console.log(auth.message);

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
                {emailError !== "" && (
                  <small className="small">{emailError}</small>
                )}
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
                  {passwordError !== "" && (
                    <small className="small">{passwordError}</small>
                  )}
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

            <Button Click={signInWithEmail} value="Signin" type="submit" className="button"/>

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
