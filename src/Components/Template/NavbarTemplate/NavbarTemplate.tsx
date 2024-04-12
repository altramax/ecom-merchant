import NavbarTemplateStyle from "./NavbarTemplateStyle";
import { useState } from "react";
import moon from "../../../assets/Icons/moon.svg";
import sun from "../../../assets/Icons/sun.svg";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import { lightmode, darkmode } from "../../../Redux/ColorSlice";
import { logOut } from "../../../Redux/AuthSlice";
import { Link } from "react-router-dom";
import dashbordIconlight from "../../../assets/Icons/dashboard-icon.svg";
import addProductsIconlight from "../../../assets/Icons/products-icon.svg";
import ordericonColor from "../../../assets/Icons/cart.png";
import Avatar from "../../Atom/Avatar/Avatar";
import trial from "../../../assets/Images/men.jpg";
import Button from "../../Molecule/Button/Button";
import arrowDown from "../../../assets/Icons/arrow-down.svg";
import light_logo from "../../../assets/Icons/light-logo.png";
import dark_logo from "../../../assets/Icons/dark-logo.png";

type navtype = {
  navControlFunction: Function;
  openNav: boolean;
  openNavFunction: Function;
};

const NavbarTemplate = ({
  openNav,
  navControlFunction,
  openNavFunction,
}: navtype) => {
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
      <div
        id={color.mode}
        className={`nav__container ${!openNav ? "contract__nav" : "open__nav"}`}
      >
        <div className='nav__container__navigations'>
          <div className='nav__heading__container'>
            {/* <div className='hamburger__container'>
              <img
                src={hamburger}
                alt='menu'
                className='hamburger'
               
              />
            </div> */}
            <div
              className={`logo__container ${
                !openNav ? "null" : "slowVisibility"
              }`}
              onClick={() => {
                navControlFunction();
                setDropDown(false);
              }}
            >
              {color.mode === "light" ? (
                <img src={light_logo} alt='' className='light__logo' />
              ) : (
                <img src={dark_logo} alt='' className='dark__logo' />
              )}
            </div>
            <h3 className={`${!openNav ? "null" : "slowVisibility"}`}>
            WearHouse
            </h3>
          </div>

          <div className='nav__link__groups'>
            <Link to={"/dashboard"} className='link__sub__group'>
              <img src={dashbordIconlight} alt='dashboard-icon' />
              <p className={`${!openNav ? "null" : "slowVisibility"}`}>
                Dashboard
              </p>
            </Link>
            <Link to={"/wearhouse"} className='link__sub__group'>
              <img src={addProductsIconlight} alt='addproducts-icon' />
              <p className={`${!openNav ? "null" : "slowVisibility"}`}>
                WearHouse
              </p>
            </Link>

            <Link to={"/orders"} className='link__sub__group'>
              <img src={ordericonColor} alt='' />
              <p className={`${!openNav ? "null" : "slowVisibility"}`}>
                Orders
              </p>
            </Link>
          </div>
        </div>

        <div className='nav__profile__group'>
          <div
            className='nav__profile'
            onClick={() => {
              openNavFunction();
              setDropDown(!dropDown);
            }}
          >
            <Avatar storename='easy' image={trial} />
            {auth.user && (
              <div
                className={`nav__profile__text__group ${
                  !openNav ? null : "slowVisibility"
                }`}
              >
                <p className='store__name'>{auth.user.displayName}</p>
                <p className='store__email'>{auth.user.email}</p>
              </div>
            )}
            <img
              src={arrowDown}
              alt='arrow-icon'
              className={`${dropDown ? "fliparrow" : "arrowdown"}  `}
            />
          </div>

          <div
            className={`profile__dropDown ${
              !openNav ? "null" : "slowVisibility"
            } ${!dropDown ? "hide__dropdown" : null}`}
          >
            <div>
              <Link to={"/settings"} className='link'>
                Settings
              </Link>
              <Link to={"/profile"} className='link'>
                Profile
              </Link>
            </div>
            <div className='profile__dropDown__tools'>
              <Button
                type='button'
                value='LogOut'
                className='logout'
                Click={() => dispatch(logOut())}
              />
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
            </div>
          </div>
        </div>
      </div>
    </NavbarTemplateStyle>
  );
};

export default NavbarTemplate;
