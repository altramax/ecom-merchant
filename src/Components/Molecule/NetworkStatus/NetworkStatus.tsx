import { useState, useEffect } from "react";
import NetworkErrorStyle from "./NetworkStatusStyle";

const NetworkStatus = (): JSX.Element => {
  const [online, setOnline] = useState<boolean | null>(navigator.onLine);
  const [OnlineStatus, setOnlineStatus] = useState<boolean>(false);

  useEffect(() => {
    const handlerOnline = () => {
      setOnline(true);
    };
    const handlerOffline = () => {
      setOnline(false);
    };

    if (navigator.onLine === false) {
      setOnlineStatus(true);
    }

    if (online === true && OnlineStatus) {
      console.log("enter");
      setTimeout(() => {
        setOnlineStatus(false);
      }, 5000);
    }

    window.addEventListener("online", handlerOnline),
      window.addEventListener("offline", handlerOffline);

    return () => {
      window.removeEventListener("online", handlerOnline),
        window.removeEventListener("offline", handlerOffline);
    };
  }, [online]);

  return (
    <NetworkErrorStyle>
      {online === true && OnlineStatus && (
        <p className="online">You are back Online</p>
      )}

      {online !== true && (
        <p className="offline">Network Error, check your Internet</p>
      )}

    </NetworkErrorStyle>
  );
};

export default NetworkStatus;
