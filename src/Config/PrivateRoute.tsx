import { memo } from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch } from "../Redux/Hooks";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./Config";
import { clearAuth } from "../Redux/AuthSlice";

type privateType = {
  children: JSX.Element;
};

const PrivateRoute = ({ children }: privateType) => {
  // const state = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch()
  const [client, setClient] = useState<any>("");
  // const auths = state.user !== null ? state.user?.userId : null;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setClient(user);
      } else {
        setClient(null);
        dispatch(clearAuth())
      }
    });
  },[]);

  return client !== null ? children : <Navigate to={"/"} />;
};

export default memo(PrivateRoute);
