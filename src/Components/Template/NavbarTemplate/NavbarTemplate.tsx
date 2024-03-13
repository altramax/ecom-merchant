import NavbarTemplateStyle from "./NavbarTemplateStyle";
import {useState } from "react";
import moon from "../../../assets/Icons/moon.svg";
import sun from "../../../assets/Icons/sun.svg";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import { lightmode, darkmode } from "../../../Redux/ColorSlice";
import { logOut } from "../../../Redux/AuthSlice";
import { Link } from "react-router-dom";
import dashbordIconlight from "../../../assets/Icons/dashboard-icon.svg";
import addProductsIconlight from "../../../assets/Icons/products-icon.svg";
import ordericonColor from "../../../assets/Icons/cart.png";
import hamburger from "../../../assets/Icons/hamburger-closed.svg";
import Avatar from "../../Atom/Avatar/Avatar";
import trial from "../../../assets/Images/men.jpg";


type navtype = {
  widthControl: Function;
  navWidth: boolean;
  openWidth: Function;
};

const NavbarTemplate = ({ navWidth, widthControl, openWidth }: navtype) => {
  const color = useAppSelector((state) => state.color);
  const auth = useAppSelector((state) => state.auth);
  const [dropDown, setDropDown] = useState<boolean>(false);
  const dispatch = useAppDispatch();


  const themeHandler = (theme: string) => {
    if (theme === "light") {
      dispatch(lightmode());
    } else if (theme === "dark") {
      dispatch(darkmode());
    }
  };

  return (
    <NavbarTemplateStyle>
      <div className="main__nav__container ">
        <div className="hamburger__container">
          <img
            src={hamburger}
            alt="menu"
            className="hamburger"
            onClick={() => {
              widthControl();
              setDropDown(false);
            }}
          />
        </div>

        <div
          id={color.mode}
          className={`nav__container ${navWidth === true ? "contract" : null}`}
          onClick={() => openWidth()}
        >
          <div className="width">
            <div className="nav__heading__container">
              <h3
                className={`${navWidth === true ? "null" : "slowVisibility"}`}
              >
                ONE WearHouse{" "}
              </h3>
            </div>

            <div className="nav__link__groups">
              <Link to={"/dashboard"} className="link__sub__group">
                <img src={dashbordIconlight} alt="dashboard-icon" />
                <p
                  className={`${navWidth === true ? "null" : "slowVisibility"}`}
                >
                  Dashboard
                </p>
              </Link>
              <Link to={"/wearhouse"} className="link__sub__group">
                <img src={addProductsIconlight} alt="addproducts-icon" />
                <p
                  className={`${navWidth === true ? "null" : "slowVisibility"}`}
                >
                  WearHouse
                </p>
              </Link>

              <Link to={"/orders"} className="link__sub__group">
                <img src={ordericonColor} alt="" />
                <p
                  className={`${navWidth === true ? "null" : "slowVisibility"}`}
                >
                  Orders
                </p>
              </Link>
            </div>
          </div>

          <div
            className="nav__profile__group"
            onClick={() => setDropDown(!dropDown)}
          >
            <div className="nav__profile">
              <Avatar storename="easy" image={trial} />
              {auth.user && (
                <div
                  className={`nav__profile__text__group ${
                    navWidth === true ? null : "slowVisibility"
                  }`}
                >
                  <p className="store__name">{auth.user.displayName}</p>
                  <p className="store__email">{auth.user.email}</p>
                </div>
              )}
            </div>

            <div
              className={`profile__dropDown ${
                navWidth === true ? "null" : "slowVisibility"
              } ${!dropDown ? "hidden" : null}`}
            >
              <div>
                <h1>Game</h1>
                <h1>Game</h1>
                <h1>Game</h1>
              </div>
              <div className="profile__dropDown__tools">
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
                <button className="logout" onClick={() => dispatch(logOut())}>
                  logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavbarTemplateStyle>
  );
};

export default NavbarTemplate;
