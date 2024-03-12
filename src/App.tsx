import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import OnboardingTemplate from "./Components/Template/OnboardingTemplate/OnboardingTemplate";
import PrivateRoutes from "./Config/PrivateRoute";
import DashboardTemplate from "./Components/Template/DashBoardTemplate/DashboardTemplate";
import OnboardingSteps from "./Components/Organisms/OnboardingSteps/OnboardingSteps";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../src/Config/Config";
import LoadingModal from "./Components/Organisms/LoadingModal/LoadingModal";

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
      } else if (!user) {
        setLoading(false);
      }
    });
  }, [auth]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={loading ? <LoadingModal /> : <OnboardingTemplate />}
        />
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
