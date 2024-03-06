import NavbarTemplateStyle from "./NavbarTemplateStyle";
import { useState, useEffect } from "react";
import moon from "../../../assets/Icons/moon.svg";
import sun from "../../../assets/Icons/sun.svg";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import { lightmode, darkmode } from "../../../Redux/ColorSlice";
import { logOut } from "../../../Redux/AuthSlice";
import { Link } from "react-router-dom";
import dashbordIconlight from "../../../assets/Icons/dashboard-icon.svg";
import addProductsIconlight from "../../../assets/Icons/products-icon.svg";
import ordericonColor from "../../../assets/Icons/cart.png";
import hamburger from "../../../assets/Icons/hamburger.svg";
import hamburgerClosed from "../../../assets/Icons/hamburger-closed.svg";
import Avatar from "../../Atom/Avatar/Avatar";
import trial from "../../../assets/Images/men.jpg";

type navtype = {
  widthControl: Function,
  navWidth: boolean;
}

const NavbarTemplate = ({navWidth, widthControl}:navtype) => {
  const color = useAppSelector((state) => state.color);
  // const [successResponse, setSuccessResponse] = useState<boolean>(false);
  // const [errorResponse, setErrorResponse] = useState<boolean>(false);
  const alert = useAppSelector((state) => state.alert);
  const errorMessage = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // handleNetWorkChange();
  }, [alert.message, errorMessage.message]);

  const themeHandler = (theme: string) => {
    if (theme === "light") {
      dispatch(lightmode());
    } else if (theme === "dark") {
      dispatch(darkmode());
    }
  };

  // const d = () => {
  //   if (alert.message !== "") {
  //     setSuccessResponse(true);
  //   }
  // };

  // const handleNetWorkChange = () => {
  //   if (alert.message !== "") {
  //     setSuccessResponse(true);
  //     setTimeout(() => {
  //       setSuccessResponse(false);
  //       dispatch(otherErrors(""));
  //     }, 2000);
  //   } else if (errorMessage.message !== "") {
  //     setErrorResponse(true);
  //     setTimeout(() => {
  //       setErrorResponse(false);
  //       dispatch(resetAuthMessage());
  //     }, 2000);
  //   }
  // };


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

        <div className='nav__heading__container'>
          <h3 className={`${navWidth === true ? "null" : "slowVisibility"}`}>
            ONE WearHouse{" "}
          </h3>
          <img src={hamburger} alt='menu' onClick={()=>widthControl()} />
          <img
            src={hamburgerClosed}
            alt='menu'
            onClick={()=>widthControl() }
            className='closed'
          />
        </div>

        <div className='nav__link__groups'>
          <Link to={"/dashboard"} className='link__sub__group'>
            <img src={dashbordIconlight} alt='dashboard-icon' />
            <p className={`${navWidth === true ? "null" : "slowVisibility"}`}>
              Dashboard
            </p>
          </Link>
          <Link to={"/wearhouse"} className='link__sub__group'>
            <img src={addProductsIconlight} alt='addproducts-icon' />
            <p className={`${navWidth === true ? "null" : "slowVisibility"}`}>
              WearHouse
            </p>
          </Link>

          <Link to={"/orders"} className='link__sub__group'>
            <img src={ordericonColor} alt='' />
            <p className={`${navWidth === true ? "null" : "slowVisibility"}`}>
              Orders
            </p>
          </Link>
        </div>

        <div className='nav__profile__group'>
          <Avatar storename='easy' image={trial} />
          <div
            className={`${
              navWidth === true ? "nav__profile__text__group" : "slowVisibility"
            }`}
          >
            <p className='store__name'>Easy</p>
            <p className='store__email'>Ezsy@gmail.com</p>
          </div>

          <div className={`theme__button ${color.mode}`}>
            <div
              className='img__container sun'
              onClick={() => {
                // modeHandler("dark");
                themeHandler("dark");
              }}
            >
              <img src={sun} alt='' />
            </div>
            <div
              className='img__container moon'
              onClick={() => {
                // modeHandler("light");
                themeHandler("light");
              }}
            >
              <img src={moon} alt='' />
            </div>
          </div>
          <button className='logout' onClick={() => dispatch(logOut())}>
            logout
          </button>
        </div>
      </div>
    </NavbarTemplateStyle>
  );
};

export default NavbarTemplate;
