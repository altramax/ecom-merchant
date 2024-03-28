import InformationBoxStyle from "./InformationBoxStyle";

type infoBoxType = {
  icon: string;
  headText: string;
  paragraph: string;
  percentageMove: string;
};

const InformationBox = ({
  icon,
  headText,
  paragraph,
  percentageMove,
}: infoBoxType) => {
  return (
    <InformationBoxStyle>
      <div className="box__container">
         <img src={icon} alt="" />
         <div>
            <p>{headText}</p>
            <h3>{paragraph}</h3>
            <div>
                <div className="rise">{percentageMove}</div>
                <div className="fall">{percentageMove}</div>
            </div>
         </div>
      </div>
    </InformationBoxStyle>
  );
};

export default InformationBox;
