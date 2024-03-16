import DashboardTemplateStyle from "./DashboardTemplateStyle";
import { useAppSelector } from "../../../Redux/Hooks";
import NavbarTemplate from "../NavbarTemplate/NavbarTemplate";
import PrivateRoute from "../../../Routes/RoutesPath";
import { useState } from "react";
import NetworkStatus from "../../Molecule/NetworkStatus/NetworkStatus";

const DashboardTemplate = () => {
  const color = useAppSelector((state) => state.color);
  const [openNav, setOpenNav] = useState<boolean>(false);

  // useEffect(() => {
  //   handleNetWorkChange();
  // }, [alert.message, errorMessage.message, cart.cartCount]);

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

  const handleNav = () => {
    setOpenNav(!openNav);
  };

  const handleOpenNav = () =>{
    setOpenNav(true);
  }

  return (
    <DashboardTemplateStyle>
      <div id={color.mode}>
        <NetworkStatus />

        <div className="dashboard__template__container">
          <div className={`nav__width ${openNav ? null : "contract"}`}>
            <NavbarTemplate
              openNav={openNav}
              navControlFunction={handleNav}
              openNavFunction = {handleOpenNav}
            />
          </div>
          <div className={`route__body ${openNav ? null : "expand"}`}>
            <PrivateRoute />
          </div>
        </div>
      </div>
    </DashboardTemplateStyle>
  );
};

export default DashboardTemplate;
