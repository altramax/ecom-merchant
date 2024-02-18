import SignUpModalStyle from "./SignUpModalStyle";
import google_Icon from "../../../assets/Icons/google.svg";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import {
  createUser,
  googleLogin,
  resetAuthMessage,
} from "../../../Redux/AuthSlice";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import eyes_closed from "../../../assets/Icons/eye_closed.svg";
import eyes_open from "../../../assets/Icons/eye_open.svg";
import VerifyEmailModal from "../VerifyEmailModal/VerifyEmailModal";

type fieldsType = {
  email: string;
  password: string;
  storeName: string;
};

type signupType = {
  signIn: any;
};

const SignUpModal = ({ signIn }: signupType): JSX.Element => {
  const color = useAppSelector((state) => state.color);
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [eyes, setEyes] = useState<boolean>(false);
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [storeNameError, setStoreNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [fields, setFields] = useState<fieldsType>({
    email: "",
    password: "",
    storeName: "",
  });

  useEffect(() => {
    // window.addEventListener("beforeunload", resetErrorMesageHandler);

    if (auth.user === null && auth.performedAction === "signup") {
      handlerErrorMessage();
    }
  }, [auth.user, auth.message]);

  const onchange = async (name: string, value: string) => {
    const fieldsValue: any = Object.assign({}, fields);
    fieldsValue[name] = value;
    await setFields(fieldsValue);
  };

  const createUserWithEmail = async (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    evt.preventDefault();
    await dispatch(createUser(fields)).then(() => handlerErrorMessage());
  };

  const createUserWithGoogle = async (
    evt: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    evt.preventDefault();
    await dispatch(googleLogin());
  };

  const passwordVisibility = (evt: boolean) => {
    setEyes(evt);
  };

  const handlerEmailVerificaton = () => {
    // evt.preventDefault();
    setVerifyEmail(true);
  };

  const renderVerifyEmailModal = () => {
    if (verifyEmail) {
      return <VerifyEmailModal />;
    }
  };

  // const resetErrorMesageHandler = (evt: any) => {
  //   dispatch(resetAuthMessage());
  //   console.log("triggered");
  // };

  const handlerErrorMessage = async () => {
    if (auth.message === "Please verify your email") {
      await handlerEmailVerificaton();
    } else if (
      auth.message.includes("password") ||
      auth.message.includes("credential")
    ) {
      console.log("enter password", auth.message);
      setPasswordError(auth.message);
    } else if (auth.message.includes("email")) {
      setEmailError(auth.message);
      console.log("enter email", auth.message);
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

  return (
    <SignUpModalStyle>
      {renderVerifyEmailModal()}
      <form id={color.mode} className={`signup__form`}>
        <div className='signup'>
          <div className='signup__header'>
            <h3>ONE WearHouse</h3>
          </div>
          <div className='signup__body'>
            <div className='signup__inputs'>
              <div className='input__group'>
                <input
                  className='input'
                  type='text'
                  placeholder='Store Name'
                  name='storeName'
                  onChange={(evt) => {
                    onchange(evt.target.name, evt.target.value);
                  }}
                />
                {storeNameError !== "" && (
                  <small className='small'>{storeNameError}</small>
                )}
              </div>

              <div className='input__group'>
                <input
                  className='input'
                  type='text'
                  placeholder='Email'
                  name='email'
                  onChange={(evt) => {
                    onchange(evt.target.name, evt.target.value);
                  }}
                />
                {emailError !== "" && (
                  <small className='small'>{emailError}</small>
                )}
              </div>

              <div className='password__group'>
                <div className='input__group'>
                  <input
                    className='input'
                    type={eyes === true ? "text" : "password"}
                    placeholder='Password'
                    name='password'
                    onChange={(evt) => {
                      onchange(evt.target.name, evt.target.value);
                    }}
                  />
                  {passwordError !== "" && (
                    <small className='small'>{passwordError}</small>
                  )}
                </div>

                <div className='eyes__group'>
                  <img
                    src={eyes_closed}
                    alt=''
                    className={eyes === false ? "visible" : "hidden"}
                    onClick={() => passwordVisibility(true)}
                  />
                  <img
                    src={eyes_open}
                    alt=''
                    className={eyes === true ? "visible" : "hidden"}
                    onClick={() => passwordVisibility(false)}
                  />
                </div>
              </div>
            </div>

            <button className='button' onClick={createUserWithEmail}>
              Signup
            </button>

            <div className='signup__dash'>
              <div>——————</div>
              <p>or</p>
              <div>——————</div>
            </div>

            <div
              className='signup__body__googlelogin'
              onClick={createUserWithGoogle}
            >
              <img src={google_Icon} alt='google Icon' />
              <p>Signup with Google</p>
            </div>

            <p className='signin'>
              Already have an account ? <span onClick={signIn}> Signin</span>
            </p>
          </div>
        </div>
      </form>
    </SignUpModalStyle>
  );
};

export default SignUpModal;
