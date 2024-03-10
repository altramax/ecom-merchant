import { memo } from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch } from "../Redux/Hooks";
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
  const [client, setClient] = useState<any>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setClient(user);
      } else {
        setClient(null);
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
