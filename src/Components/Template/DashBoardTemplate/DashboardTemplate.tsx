import DashboardTemplateStyle from "./DashboardTemplateStyle";
import { useState } from "react";
import moon from "../../../assets/Icons/moon.svg";
import sun from "../../../assets/Icons/sun.svg";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import { lightmode, darkmode } from "../../../Redux/ColorSlice";
import { logOut } from "../../../Redux/AuthSlice";
import NavbarTemplate from "../NavbarTemplate/NavbarTemplate";
import PrivateRoute from "../../../Routes/RoutesPath";
import Dashboard from "../../Molecule/Dashboard/Dashboard";

const DashboardTemplate = () => {
  const [mode, setMode] = useState<string>("light");
  const dispatch = useAppDispatch();
  const color = useAppSelector((state) => state.color);

  // useEffect(() => {
  //   handleNetWorkChange();
  // }, [alert.message, errorMessage.message, cart.cartCount]);

  const setTheme = (theme: string) => {
    if (theme === "light") {
      dispatch(lightmode());
    } else if (theme === "dark") {
      dispatch(darkmode());
    }
  };

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
      <div id={color} className={`theme__button ${mode}`}>
        <div
          className="img__container sun"
          onClick={() => {
            setMode("dark");
            setTheme("dark");
          }}
        >
          <img src={sun} alt="" />
        </div>
        <div
          className="img__container moon"
          onClick={() => {
            setMode("light");
            setTheme("light");
          }}
        >
          <img src={moon} alt="" />
        </div>
      </div>
      <button onClick={() => dispatch(logOut())}>logout</button>
      <div className="dashboard__template__container">
        <NavbarTemplate />
        <PrivateRoute />
        <Dashboard/>
      </div>
    </DashboardTemplateStyle>
  );
};

export default DashboardTemplate;
