import { memo } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../Redux/Hooks";

type privateType = {
  children: JSX.Element;
};

const PrivateRoute = ({ children }: privateType) => {
  const auth = useAppSelector((state) => state.auth);
  return auth.user !== null ? children : <Navigate to={"/"} />;
};

export default memo(PrivateRoute);
