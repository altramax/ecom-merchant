import NavbarTemplateStyle from "./NavbarTemplateStyle";
import { useState, useEffect } from "react";
import moon from "../../../assets/Icons/moon.svg";
import sun from "../../../assets/Icons/sun.svg";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import { lightmode, darkmode } from "../../../Redux/ColorSlice";
import { logOut, resetErrorMessage} from "../../../Redux/AuthSlice";
import { otherErrors } from "../../../Redux/AlertSlice";

const NavbarTemplate = () => {
  const color = useAppSelector((state) => state.color);
  const [successResponse, setSuccessResponse] = useState<boolean>(false);
  const [errorResponse, setErrorResponse] = useState<boolean>(false);
  const alert = useAppSelector((state) => state.alert);
  const errorMessage = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    handleNetWorkChange();
  }, [alert.message, errorMessage.message]);

  const themeHandler = (theme: string) => {
    if (theme === "light") {
      dispatch(lightmode());
    } else if (theme === "dark") {
      dispatch(darkmode());
    }
  };

  const d = () => {
    if (alert.message !== "") {
      setSuccessResponse(true);
    }
  };

  const handleNetWorkChange = () => {
    if (alert.message !== "") {
      setSuccessResponse(true);
      setTimeout(() => {
        setSuccessResponse(false);
        dispatch(otherErrors(""));
      }, 3000);
    } else if (errorMessage.message !== "") {
      setErrorResponse(true);
      setTimeout(() => {
        setErrorResponse(false);
        dispatch(resetErrorMessage());
      }, 3000);
    }
  };

  return (
    <NavbarTemplateStyle>
      <div className="alert__group">
        {successResponse && (
          <div className="network__response">{alert.message}</div>
        )}
        {errorResponse && (
          <div className="network__response">{errorMessage.message}</div>
        )}
      </div>
      <div id={color.mode} className="navbar__container">
        <ul>
          <li>Dashboard</li>
          <li>Add Products</li>
          <li> Orders</li>
          <li>Settings</li>
        </ul>
      </div>
      <div className={`theme__button ${color.mode}`}>
        <div
          className="img__container sun"
          onClick={() => {
            // modeHandler("dark");
            themeHandler("dark");
          }}
        >
          <img src={sun} alt="" />
        </div>
        <div
          className="img__container moon"
          onClick={() => {
            // modeHandler("light");
            themeHandler("light");
          }}
        >
          <img src={moon} alt="" />
        </div>
      </div>
      <button onClick={() => dispatch(logOut())}>logout</button>
    </NavbarTemplateStyle>
  );
};

export default NavbarTemplate;
