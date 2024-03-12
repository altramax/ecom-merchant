import { memo } from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Redux/Hooks";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./Config";
import { clearAuth } from "../Redux/AuthSlice";
import LoadingModal from "../Components/Organisms/LoadingModal/LoadingModal";

type privateType = {
  children: JSX.Element;
};

const PrivateRoute = ({ children }: privateType) => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.auth);
  const [client, setClient] = useState<any>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      
      if (user && currentUser.user !== null) {
        setClient(user);
        setLoading(false);
      } else if (!user || currentUser.user === null) {
        setClient(null);
        setLoading(false);
        dispatch(clearAuth());
      }
    });
  }, [auth]);

  return loading ? (
    <LoadingModal />
  ) : client !== null ? (
    children
  ) : (
    <Navigate to={"/"} />
  );
};

export default memo(PrivateRoute);
