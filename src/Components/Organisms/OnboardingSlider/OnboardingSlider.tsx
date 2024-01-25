import { useState } from "react";
import Slider from "../../Molecule/Slider/Slider";
import OnboardingSliderStyle from "./OnboardingSliderStyle";
import market from "../../assets/Images/market-login.jpg";
import community from "../../assets/Images/global-community.jpg";
import customer_service from "../../assets/Images/customer-care.jpg";
import left from "../../assets/Icons/arrow-left.svg";
import right from "../../assets/Icons/arrow-right.svg";

const OnboardingSlider = () => {
  const [selected, setSelected] = useState<string>("market");

  const fields = [
    { image: { market }, title: "market", Text: "this is a market" },
    { image: { community }, title: "market", Text: "this is a market" },
    { image: { customer_service }, title: "market", Text: "this is a market" },
  ];

  const selectionHandler = (screen: string) => {
    setSelected(screen);
  };

  return (
    <OnboardingSliderStyle>
      <div className=
      {`direction ${fields.length === 0 ? "blur" : ""}`}>
        <img src={left} alt="left" />
      </div>
      <div className="slider__group__container">{/* <Slider/> */}</div>
      <div className="direction">
        <img src={right} alt="right" />
      </div>
    </OnboardingSliderStyle>
  );
};

export default OnboardingSlider;
