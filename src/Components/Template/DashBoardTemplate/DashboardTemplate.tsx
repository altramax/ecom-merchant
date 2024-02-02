import DashboardTemplateStyle from "./DashboardTemplateStyle";
import { useState } from "react";
import moon from "../../../assets/Icons/moon.svg";
import sun from "../../../assets/Icons/sun.svg";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import { lightmode, darkmode } from "../../../Redux/ColorSlice";
import { logOut } from "../../../Redux/AuthSlice";
import NavbarTemplate from "../NavbarTemplate/NavbarTemplate";
import PrivateRoute from "../../../Routes/RoutesPath";

const DashboardTemplate = () => {
  const dispatch = useAppDispatch();
  const color = useAppSelector((state) => state.color);

  // useEffect(() => {
  //   handleNetWorkChange();
  // }, [alert.message, errorMessage.message, cart.cartCount]);

  const themeHandler = (theme: string) => {
    if (theme === "light") {
      dispatch(lightmode());
    } else if (theme === "dark") {
      dispatch(darkmode());
    }
  };

  // const modeHandler = (mod : string) =>{
  //   setMode(mod)
  // }

  // const handleNetWorkChange = () => {
  //   if (alert.message !== "") {
  //     setSuccessResponse(true);
  //     setTimeout(() => {
  //       setSuccessResponse(false);
  //       dispatch(otherErrors(""));
  //     }, 3000);
  //   } else if (errorMessage.message !== "") {
  //     setErrorResponse(true);
  //     setTimeout(() => {
  //       setErrorResponse(false);
  //       dispatch(resetErrorMessage());
  //     }, 3000);
  //   }
  // };

  return (
    <DashboardTemplateStyle>
      <div id={color.mode}>
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

        <div className="dashboard__template__container">
          <div className="nav__width">
            <NavbarTemplate />
          </div>
          <div className="route__body">
            <PrivateRoute />
          </div>
        </div>
      </div>
    </DashboardTemplateStyle>
  );
};

export default DashboardTemplate;
