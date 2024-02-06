import DashboardTemplateStyle from "./DashboardTemplateStyle";
import {useAppSelector } from "../../../Redux/Hooks";
import NavbarTemplate from "../NavbarTemplate/NavbarTemplate";
import PrivateRoute from "../../../Routes/RoutesPath";

const DashboardTemplate = () => {
  const color = useAppSelector((state) => state.color);

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

  return (
    <DashboardTemplateStyle>
      <div id={color.mode}>
     

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
