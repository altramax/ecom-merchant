import { Routes, Route } from "react-router-dom";
import routes from "./Routes";
import PrivateRoute from "../Config/PrivateRoute";

const PrivateRoutesPath = (): JSX.Element => {
  return (
    <Routes>
      {routes.map(
        (route) =>
          route.elements &&
          route.elements.map((route, i) => (
            <Route
              key={i}
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
