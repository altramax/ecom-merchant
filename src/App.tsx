import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import OnboardingTemplate from "./Components/Template/OnboardingTemplate/OnboardingTemplate";
import PrivateRoutes from "./Config/PrivateRoute";
import DashboardTemplate from "./Components/Template/DashBoardTemplate/DashboardTemplate";
// import { useAppSelector} from"./Redux/Hooks";
import OnboardingSteps from "./Components/Organisms/OnboardingSteps/OnboardingSteps";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnboardingTemplate />} />
        <Route
          path="/onboardingsteps"
          element={
            <PrivateRoutes>
              <OnboardingSteps />
            </PrivateRoutes>
          }
        />
        <Route
          path="*"
          element={
            <PrivateRoutes>
              <DashboardTemplate />
            </PrivateRoutes>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
