import NavbarTemplateStyle from "./NavbarTemplateStyle";
import { useState, useEffect } from "react";
import moon from "../../../assets/Icons/moon.svg";
import sun from "../../../assets/Icons/sun.svg";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import { lightmode, darkmode } from "../../../Redux/ColorSlice";
import { logOut, resetErrorMessage } from "../../../Redux/AuthSlice";
import { otherErrors } from "../../../Redux/AlertSlice";
import { Link } from "react-router-dom";
import dashbordIconlight from "../../../assets/Icons/dashboard-icon.svg";
import addProductsIconlight from "../../../assets/Icons/products-icon.svg";
import ordericonColor from "../../../assets/Icons/orders-icon.svg";

const NavbarTemplate = () => {
  const color = useAppSelector((state) => state.color);
  const [successResponse, setSuccessResponse] = useState<boolean>(false);
  const [errorResponse, setErrorResponse] = useState<boolean>(false);
  const [navWidth, setNavWidth] = useState<boolean>(false);
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

  const handleNavWidth = () => {
    setNavWidth(!navWidth);
    console.log("click");
  };

  return (
    <NavbarTemplateStyle>
      <div
        id={color.mode}
        className={`nav__container ${navWidth === true ? "contract" : null}`}
      >
        {/* <div className="alert__group">
          {successResponse && (
            <div className="network__response">{alert.message}</div>
          )}
          {errorResponse && (
            <div className="network__response">{errorMessage.message}</div>
          )}
        </div> */}

        <div className="heading__container">
          <h1 className="heading">Merchant</h1>
          <button onClick={handleNavWidth}>close</button>
        </div>

        <div className="link__groups">
          <Link to={"/dashboard"} className="link__sub__group">
            <img src={dashbordIconlight} alt="dashboard-icon" />
            <p className={`${navWidth === true ? "null" : "p"}`}>Dashboard</p>
          </Link>
          <Link to={"/wearhouse"} className="link__sub__group">
            <img src={addProductsIconlight} alt="addproducts-icon" />
            <p className={`${navWidth === true ? "null" : "p"}`}>WearHouse</p>
          </Link>

          <Link to={"/orders"} className="link__sub__group">
            <img src={ordericonColor} alt="" />
            <p className={`${navWidth === true ? "null" : "p"}`}>Orders</p>
          </Link>
        </div>
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
