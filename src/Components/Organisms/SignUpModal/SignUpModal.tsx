import SignUpModalStyle from "./SignUpModalStyle";
import google_Icon from "../../../assets/Icons/google.svg";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import { createUser, googleLogin } from "../../../Redux/AuthSlice";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import eyes_closed from "../../../assets/Icons/eye_closed.svg";
import eyes_open from "../../../assets/Icons/eye_open.svg";

type fieldsType = {
  email: string;
  password: string;
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

  const [fields, setFields] = useState<fieldsType>({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (auth.userId === null) {
    } else if (auth.userId !== null) {
      navigate("/dashboard");
    }
  }, [auth.userId]);

  const onchange = async (name: string, value: string) => {
    const fieldsValue: any = Object.assign({}, fields);
    fieldsValue[name] = value;
    await setFields(fieldsValue);
  };

  const createUserWithEmail = async (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    evt.preventDefault();
    await dispatch(createUser(fields));
    // console.log(auth);
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

  return (
    <SignUpModalStyle>
      <form id={color.mode} className={`signup__form`}>
        <div className="signup">
          <div className="signup__header">
            <h3>ONESTORE</h3>
          </div>
          <div className="signup__body">
            <div className="signup__inputs">
              <input
                className="input"
                type="text"
                placeholder="Email"
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

            <button className="button" onClick={createUserWithEmail}>
              Signup
            </button>

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
