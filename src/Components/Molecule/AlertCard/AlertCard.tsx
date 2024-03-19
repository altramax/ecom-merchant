import AlertCardStyle from "./AlertCardStyles";
import { useAppSelector } from "../../../Redux/Hooks";

const AlertCard = () => {
  const color = useAppSelector((state) => state.color);

  return (
    <AlertCardStyle>
      <div id={color.mode}>
        <div className='alertcard__container'>AlertCard</div>
      </div>
    </AlertCardStyle>
  );
};

export default AlertCard;
