import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import OnboardingTemplate from "./Components/Template/OnboardingTemplate/OnboardingTemplate";
import PrivateRoutes from "./Config/PrivateRoute";
import Dashboard from "./Components/Template/DashBoardTemplate/DashboardTemplate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="*"
          element={
            <PrivateRoutes>
              <Dashboard />
            </PrivateRoutes>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
