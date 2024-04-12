import InformationBoxStyle from "./InformationBoxStyle";
import { useAppSelector } from "../../../Redux/Hooks";

type infoBoxType = {
  icon: string;
  headText: string;
  text: string;
};

const InformationBox = ({ icon, headText, text }: infoBoxType) => {
  const color = useAppSelector((state) => state.color);
  return (
    <InformationBoxStyle>
      <div className="box__container" id={color.mode}>
        {/* <div className="img__container"> */}
          <img src={icon} alt="" />
        {/* </div> */}
        <div className="box__container__textgroup">
          <p>{headText}</p>
          <h3>{text}</h3>
        </div>
      </div>
    </InformationBoxStyle>
  );
};

export default InformationBox;
