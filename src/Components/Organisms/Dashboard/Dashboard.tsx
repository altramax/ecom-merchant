import DashboardStyle from "./DashboardStyle";
import { useAppSelector } from "../../../Redux/Hooks";
import graph__image from "../../../assets/Images/graph image.png";
import arrowright from "../../../assets/Icons/arrow-right.svg";
import { useNavigate } from "react-router-dom";
import welcome_image from "../../../assets/Icons/welcome.png";
import Chart from "../../Molecule/Chart/Chart";
import InformationBox from "../../Molecule/InformationBox/InformationBox";
import info_icon from "../../../assets/Icons/profile-icon.svg";

const Dashboard = () => {
  const user = useAppSelector((state) => state.auth.user);
  const color = useAppSelector((state) => state.color);
  const navigate = useNavigate();
  const profileInformationStatus = useAppSelector(
    (state) => state.stepForm.skipForNow
  );

  return (
    <DashboardStyle>
      <div id={color.mode}>
        <div className="dashboard__container">
          <div className="dashboard__container__header">
            <div className="dashboard__container__header__displayarea">
              {profileInformationStatus === "completed" ? (
                <div className="welcome__container">
                  <div>
                    <h3 className="dashboard__storename">
                      Hi {user.displayName},
                    </h3>
                    <h1>Welcome</h1>
                  </div>

                  <img src={welcome_image} alt="" />
                </div>
              ) : (
                <div className="profile__information__reminder">
                  <div className="displayarea__round__chart">
                    <img src={graph__image} alt="graph" />
                  </div>
                  <div className="displayarea__textgroup">
                    <h3>Complete Your Setup</h3>
                    <p>
                      Don't miss out on all the features, ensure your
                      information is complete to unlock full access to all our
                      services
                    </p>
                  </div>
                  <div
                    className="displayarea__navigation"
                    onClick={() => navigate("/onboardingSteps")}
                  >
                    Complete Setup <img src={arrowright} alt="arrowright" />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="dashboard__container__chartgroup">
            <div className="chart__container">
              <div className="chart__container__header">
                <h3>Audience Metrics</h3>
                <div>
                  <span>Visited</span>
                  <span>Ordered</span>
                </div>
              </div>

              <div className="chart__container__sub">
                <Chart />
              </div>
            </div>
            <div className="sales__statistics">
              {/* <div className="sales__statistics__sub"> */}
              <h3>Monthly Sales Statistics</h3>
              <div className="sales__bar">
                <div className="sales__bar__sub"></div>
              </div>
              <div className="sales__status">
                <table>
                  <thead>
                    <tr>
                      <th>status</th>
                      <th> value</th>
                      <th>items</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table__row">
                      <td>Pending Products</td>
                      <td>17,669</td>
                      <td>4</td>
                    </tr>
                    <tr className="table__row">
                      {/* <td>Delivered Product</td> */}
                      <td>17,669</td>
                      <td>4</td>
                    </tr>
                    <tr className="table__row">
                      <td>Cancelled Products</td>
                      <td>17,669</td>
                      <td>4</td>
                    </tr>
                  </tbody>
                </table>
                <h3>Total Revenue : #300,000</h3>
              </div>
              {/* </div> */}
            </div>
          </div>
          <div className="information__boxes">
            <InformationBox
              icon={info_icon}
              headText="income"
              paragraph="10,200"
              percentageMove="40%"
            />
          </div>
        
        </div>
       
      </div>
    </DashboardStyle>
  );
};

export default Dashboard;
