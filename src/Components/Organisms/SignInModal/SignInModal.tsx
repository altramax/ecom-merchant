import SignInModalStyle from "./SignInModalStyle";
import google_Icon from "../../../assets/Icons/google.svg";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import { useEffect, useState } from "react";
import { userLogin, googleLogin } from "../../../Redux/AuthSlice";
import { useNavigate } from "react-router-dom";
import eyes_closed from "../../../assets/Icons/eye_closed.svg";
import eyes_open from "../../../assets/Icons/eye_open.svg";
import { clearErrors, otherErrors } from "../../../Redux/AlertSlice";

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
  // const errorMessage = useAppSelector((state) => state.alert);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [eyes, setEyes] = useState<boolean>(false);
  const [error, setError] = useState("");

  const [fields, setFields] = useState<fieldsType>({
    email: "",
    password: "",
  });

  useEffect(() => {
    // dispatch(clearErrors());
      // handlerErrorMessage();
  
    if (auth.userId === null) {
    // } else if (auth.userId !== null && auth.emailVerified === false) {
    //   dispatch(otherErrors("Please Verify your Email"));

    //   handlerErrorMessage();
    //   // console.log("useEffect condition");
    // } else if (
    //   auth.userId !== null &&
    //   auth.emailVerified !== false &&
    //   auth.profileCompleted === true
    // ) {
    //   navigate("/onboardingsteps");
    }
     else if (
      auth.userId !== null
      //  &&
      // auth.emailVerified !== false &&
      // auth.profileCompleted !== false
    ) {
      navigate("/dashboard");
    }
  }, [auth.userId]);

  const onchange = async (name: string, value: string) => {
    const fieldsValue: any = Object.assign({}, fields);
    fieldsValue[name] = value;
    await setFields(fieldsValue);
  };

  const signInWithEmail = async (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    evt.preventDefault();
    await dispatch(userLogin(fields)).then(() => {});
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

  // const handlerErrorMessage = async () => {
  //   await setError(errorMessage.message);
  //   setTimeout(() => {
  //     dispatch(clearErrors());
  //     setError("");
  //   }, 2000);
  // };

  return (
    <SignInModalStyle>
      <form id={color.mode} className={`signin__form`}>
        {error !== "" && <div>{error}</div>}
        <div className="signin">
          <div className="signin__header">
            <h3>Welcome Back</h3>
          </div>
          <div className="signin__body">
            <div className="signin__inputs">
              <input
                className="input"
                type="text"
                placeholder="Your Email"
                name="email"
                onChange={(evt) => {
                  onchange(evt.target.name, evt.target.value);
                }}
              />
              <div className="password__group">
                <input
                  className="input"
                  type={eyes === true ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  onChange={(evt) => {
                    onchange(evt.target.name, evt.target.value);
                  }}
                />
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

            <button className="button" onClick={signInWithEmail}>
              Signin
            </button>

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
