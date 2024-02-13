import { memo } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../Redux/Hooks";

type privateType = {
  children: JSX.Element;
};

const PrivateRoute = ({ children }: privateType) => {
  const state = useAppSelector((state) => state.auth);
  const auth = state.user !== null ? state.user.userId : null;
  console.log(state);
  return auth !== null ? children : <Navigate to={"/"} />;
};

export default memo(PrivateRoute);
