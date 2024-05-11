import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import OnboardingTemplate from "./Redux/OnboardingTemplate";
import PrivateRoutes from "./Config/PrivateRoute";
import ConditionalPrivateRoute from "./Config/ConditionalPrivateRoute";
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
  const [loading, setLoading] = useState<boolean>(true);
  const skipForNow = useAppSelector((state) => state.stepForm.skipForNow);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user && currentUser.user !== null) {
        setLoading(false);
      } else if (!user || currentUser.user === null) {
        setLoading(false);
        dispatch(clearAuth());
      }
    });
  }, [currentUser.user]);

  // const appHeight = () => {
  //   const doc = document.documentElement;
  //   doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  // };
  // window.addEventListener("resize", appHeight);
  // appHeight();

 

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
            <ConditionalPrivateRoute condition={skipForNow !== "completed"}>
              <OnboardingSteps />
            </ConditionalPrivateRoute>
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
