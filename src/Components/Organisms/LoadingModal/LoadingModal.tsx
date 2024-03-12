import LoadingModalStyle from "./LoadingModalstyles";
import { useAppSelector } from "../../../Redux/Hooks";
import { useEffect, useState } from "react";

const LoadingModal = () => {
  const color = useAppSelector((state) => state.color);
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    const handleCount = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 100) {
          clearInterval(handleCount);
          return prevCount;
        } else {
          return prevCount + 1;
        }
      });
    }, 50);
    return () => clearInterval(handleCount);
  }, []);

  return (
    <LoadingModalStyle>
      <div id={color.mode} className="loading__container">
        <div className='loading'></div>
        {/* <div>{count}%</div> */}
      </div>
    </LoadingModalStyle>
  );
};

export default LoadingModal;
