import DashboardStyle from "./DashboardTemplateStyle";
import OnboardingTemplate from "../OnboardingTemplate/OnboardingTemplate";
import { useState } from "react";
import moon from "../../../assets/Icons/moon.svg";
import sun from "../../../assets/Icons/sun.svg";

const Dashboard = () => {
  const [mode, setMode] = useState<string>("light");

  return (
    <DashboardStyle>
      {/* <div id={`${mode === "light" ? "light" : "dark"}`}> */}

        <div className={`theme__button ${mode}`}>
          <div
            className="img__container sun"
            onClick={() => {
              setMode("dark");
              console.log("moon");
            }}
          >
            <img src={sun} alt="" />
          </div>
          <div
            className="img__container moon"
            onClick={() => {
              setMode("light");
              console.log("sun");
            }}
          >
            <img src={moon} alt="" />
          </div>
        </div>

      {/* </div> */}

    </DashboardStyle>
  );
};

export default Dashboard;
