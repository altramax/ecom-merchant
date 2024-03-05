import SignUpModalStyle from "./SignUpModalStyle";
import google_Icon from "../../../assets/Icons/google.svg";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import {
  createUser,
  googleLogin,
  // resetAuthMessage,
} from "../../../Redux/AuthSlice";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import eyes_closed from "../../../assets/Icons/eye_closed.svg";
import eyes_open from "../../../assets/Icons/eye_open.svg";
import VerifyEmailModal from "../VerifyEmailModal/VerifyEmailModal";
import Button from "../../Molecule/Button/Button";
import { addDoc, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../Config/Config";
import { update } from "firebase/database";

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
  const [eyes, setEyes] = useState<boolean>(false);
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [storeNameError, setStoreNameError] = useState<boolean>(false);
  const [existingStoreName, setExistingName] = useState<any>("");
  const navigate = useNavigate();
  const [fields, setFields] = useState<fieldsType>({
    email: "",
    password: "",
    storeName: "",
  });
  const docRef = doc(db, "Merchant", "StoreName");

  useEffect(() => {
    getExistingStore();
    if (auth.message === "Please verify your email") {
      handlerEmailVerificaton();
    } else if (auth.message === "Request Successful") {
      navigate("/onboardingSteps");
    }
  }, [auth.user, auth.message]);

  useEffect(() => {
    if (fields.storeName !== "") {
      setTimeout(() => {
        checkIfStoreNameExist();
      }, 2000);
    }
  }, [fields.storeName]);


  const onchange = async (name: string, value: string) => {
    const fieldsValue: any = Object.assign({}, fields);
    fieldsValue[name] = value;
    await setFields(fieldsValue);
  };

  const getExistingStore = async () => {
    const data = await getDoc(docRef);
    if (data.exists()) {
      setExistingName(data.data().stores);
    }
  };

  const checkIfStoreNameExist = () => {
    existingStoreName.filter((stores: any) => fields.storeName === stores)
      .length >= 1
      ? setStoreNameError(true)
      : setStoreNameError(false);
  };

  const storeNameDataHandler = async () => {
    await setDoc(docRef, {
      stores: [...existingStoreName, fields.storeName],
    });
  };

  const createUserWithEmail = async (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    evt.preventDefault();
      if (!storeNameError) {
        await dispatch(createUser(fields));
        storeNameDataHandler();
    }
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
    setVerifyEmail(true);
  };

  const renderVerifyEmailModal = () => {
    if (verifyEmail) {
      return <VerifyEmailModal />;
    }
  };

  return (
    <SignUpModalStyle>
      {renderVerifyEmailModal()}
      <form id={color.mode} className={`signup__form`}>
        <div className="signup">
          <div className="signup__header">
            <h3>ONE WearHouse</h3>
          </div>
          <div className="signup__body">
            <div className="signup__inputs">
              <div className="input__group">
                <input
                  className="input"
                  type="text"
                  placeholder="Store Name"
                  name="storeName"
                  onChange={(evt) => {
                    onchange(evt.target.name, evt.target.value);
                  }}
                />
                {storeNameError && (
                  <small className="small">This Store Already Exist</small>
                )}
              </div>

              <div className="input__group">
                <input
                  className="input"
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={(evt) => {
                    onchange(evt.target.name, evt.target.value);
                  }}
                />
                {auth.performedAction === "signup" &&
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
                  {auth.message.includes("password") ||
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
              type="submit"
              className="button"
              Click={createUserWithEmail}
              value="Signup"
            />

            <div className="signup__dash">
              <div>——————</div>
              <p>or</p>
              <div>——————</div>
            </div>

            <div
              className="signup__body__googlelogin"
              onClick={createUserWithGoogle}
            >
              <img src={google_Icon} alt="google Icon" />
              <p>Signup with Google</p>
            </div>

            <p className="signin">
              Already have an account ? <span onClick={signIn}> Signin</span>
            </p>
          </div>
        </div>
      </form>
    </SignUpModalStyle>
  );
};

export default SignUpModal;
