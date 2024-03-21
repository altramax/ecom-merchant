import DashboardStyle from "./DashboardStyle";
import { useAppSelector } from "../../../Redux/Hooks";
import graph__image from "../../../assets/Images/graph image.png";
import arrowright from "../../../assets/Icons/arrow-right.svg";
import { useNavigate } from "react-router-dom";
import welcome_image from "../../../assets/Images/welcome.jpg";

const Dashboard = () => {
  const user = useAppSelector((state) => state.auth.user);
  const color = useAppSelector((state) => state.color);
  const navigate = useNavigate();
  const profileInformationStatus = useAppSelector(
    (state) => state.stepForm.skipForNow
  );
  console.log(profileInformationStatus);
  return (
    <DashboardStyle>
      <div id={color.mode}>
        <div className='dashboard__container'>
          <div className='dashboard__container__header'>
            <h1 className='dashboard__storename'>Hi {user.displayName}</h1>
            <div className='dashboard__container__header__displayarea'>
              {profileInformationStatus === "completed" ? (
                <div className="welcome__image">
                  <img src={welcome_image} alt='' />
                </div>
              ) : (
                <div className='profile__information__reminder'>
                  <div className='displayarea__round__chart'>
                    <img src={graph__image} alt='graph' />
                  </div>
                  <div className='displayarea__textgroup'>
                    <h3>Complete Your Setup</h3>
                    <p>
                      Don't miss out on all the features, ensure your
                      information is complete to unlock full access to all our
                      services
                    </p>
                  </div>
                  <div
                    className='displayarea__navigation'
                    onClick={() => navigate("/onboardingSteps")}
                  >
                    Complete Setup <img src={arrowright} alt='arrowright' />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardStyle>
  );
};

export default Dashboard;
