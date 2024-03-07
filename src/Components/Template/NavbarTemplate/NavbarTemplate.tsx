import NavbarTemplateStyle from "./NavbarTemplateStyle";
import { useEffect, useState } from "react";
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
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../Config/Config";
import { stepOne, stepTwo, skipForNow } from "../../../Redux/StepForm";

type navtype = {
  widthControl: Function;
  navWidth: boolean;
  openWidth: Function;
};

const NavbarTemplate = ({ navWidth, widthControl, openWidth }: navtype) => {
  const color = useAppSelector((state) => state.color);
  const alert = useAppSelector((state) => state.alert);
  const auth = useAppSelector((state) => state.auth);
  // const stepForm = useAppSelector((state)=> state.stepForm)/
  const errorMessage = useAppSelector((state) => state.auth);
  const [dropDown, setDropDown] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getProfileInformation();
  }, [alert.message, errorMessage.message]);

  const themeHandler = (theme: string) => {
    if (theme === "light") {
      dispatch(lightmode());
    } else if (theme === "dark") {
      dispatch(darkmode());
    }
  };

  const getProfileInformation = async () => {
    const docRef = doc(db, "Merchant", auth.user.uid);
    await getDoc(docRef).then((data: any) => {
      dispatch(stepOne(data.data().OwnersInformation));
      dispatch(stepTwo(data.data().businessInformation));
      dispatch(skipForNow(data.data().skipForNow));
    });
  };

  console.log(auth.user);

  return (
    <NavbarTemplateStyle>
      <div className='main__nav__container '>
        <div className='images__groups'>
          <img
            src={hamburger}
            alt='menu'
            className='hamburger'
            onClick={() => {
              widthControl();
              setDropDown(false);
            }}
          />
          <img
            src={hamburgerClosed}
            alt='menu'
            onClick={() => {
              widthControl();
              setDropDown(false);
            }}
            className='hamburger closed'
          />
        </div>

        <div
          id={color.mode}
          className={`nav__container ${navWidth === true ? "contract" : null}`}
          onClick={() => openWidth()}
        >
          <div className='nav__heading__container'>
            <h3 className={`${navWidth === true ? "null" : "slowVisibility"}`}>
              ONE WearHouse{" "}
            </h3>
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

          <div
            className='nav__profile__group'
            onClick={() => setDropDown(!dropDown)}
          >
            <div className='nav__profile'>
              <Avatar storename='easy' image={trial} />
              <div
                className={`${
                  navWidth === true
                    ? "nav__profile__text__group"
                    : "slowVisibility"
                }`}
              >
                <p className='store__name'>{auth.user.displayName}</p>
                <p className='store__email'>{auth.user.email}</p>
              </div>
            </div>

            <div className={`profile__dropDown ${!dropDown ? "hidden" : null}`}>
              <div>
                <h1>Game</h1>
                <h1>Game</h1>
                <h1>Game</h1>
              </div>
              <div className='profile__dropDown__tools'>
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
          </div>
        </div>
      </div>
    </NavbarTemplateStyle>
  );
};

export default NavbarTemplate;
