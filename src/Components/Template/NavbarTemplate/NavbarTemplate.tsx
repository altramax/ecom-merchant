import NavbarTemplateStyle from "./NavbarTemplateStyle";
import { useState } from "react";
import moon from "../../../assets/Icons/moon.svg";
import sun from "../../../assets/Icons/sun.svg";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import { lightmode, darkmode } from "../../../Redux/ColorSlice";
import { logOut } from "../../../Redux/AuthSlice";

const NavbarTemplate = () => {
  const color = useAppSelector((state)=>state.color)
  const dispatch = useAppDispatch();

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



  return (

    <NavbarTemplateStyle>
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
  )
}

export default NavbarTemplate;