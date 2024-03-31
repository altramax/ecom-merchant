import InformationBoxStyle from "./InformationBoxStyle";

type infoBoxType = {
  icon: string;
  headText: string;
  text: string;
};

const InformationBox = ({
  icon,
  headText,
  text  
}: infoBoxType) => {
  return (
    <InformationBoxStyle>
      <div className="box__container">
         <img src={icon} alt="" />
         <div className="box__container__textgroup">
            <p>{headText}</p>
            <h3>{text}</h3>
         </div>
      </div>
    </InformationBoxStyle>
  );
};

export default InformationBox;
