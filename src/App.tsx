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
import { useAppDispatch, useAppSelector } from "./Redux/Hooks";
import { clearAuth } from "./Redux/AuthSlice";

function App() {
  const currentUser = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  // const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user && currentUser.user !== null) {
        setLoading(false);
        // setAuthenticated(true);
      } else if (!user || currentUser.user === null) {
        // setAuthenticated(false);
        setLoading(false);
        dispatch(clearAuth());
      }
    });
  }, [currentUser.user]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            loading ? 
              <LoadingModal />
            : 
              <OnboardingTemplate />
            
          }
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
