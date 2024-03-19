import { memo } from "react";
import { Navigate } from "react-router-dom";
// import { useAppSelector } from "../Redux/Hooks";
import { auth } from "./Config";
import LoadingModal from "../Components/Organisms/LoadingModal/LoadingModal";
import { useAppDispatch, useAppSelector } from "../Redux/Hooks";
import { clearAuth } from "../Redux/AuthSlice";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

type privateType = {
  children: JSX.Element;
  condition : any
};

const ConditionalPrivateRoute = ({ children, condition }: privateType) => {
  const currentUser = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user && currentUser.user !== null) {
        setLoading(false);
        setAuthenticated(true);
      } else if (!user || currentUser.user === null) {
        setAuthenticated(false);
        setLoading(false);
        dispatch(clearAuth());
      }
    });
  }, [currentUser.user]);

  return loading ? (
    <LoadingModal />
  ) : currentUser.user !== null && authenticated && condition ? (
    children
  ) : (
    <Navigate to={"/dashboard"} />
  );
};

export default memo(ConditionalPrivateRoute);
