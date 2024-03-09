import LoadingModalStyle from "./LoadingModal";
import { useAppSelector } from "../../../Redux/Hooks";
import { useState, useEffect } from "react";

const LoadingModal = () => {
  const color = useAppSelector((state) => state.color);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <LoadingModalStyle>
      <div id={color.mode}>
        <div className="loading">{count}</div>
      </div>
    </LoadingModalStyle>
  );
};

export default LoadingModal;
