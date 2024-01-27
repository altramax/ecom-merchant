import { Routes, Route } from "react-router-dom";
import routes from "./PrivateRoutes";
import PrivateRoute from "../Config/PrivateRoute";

const PrivateRoutesPath = () => {
  return (
    <Routes>
      {routes.map(
        (route) =>
          route.elements &&
          route.elements.map((route, i) => (
            <Route
              path={route.path}
              element={
                <PrivateRoute>
                  <route.component />
                </PrivateRoute>
              }
            ></Route>
          ))
      )}
    </Routes>
  );
};

export default PrivateRoutesPath;
