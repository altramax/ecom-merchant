import { useState } from "react";
import Slider from "../../Molecule/Slider/Slider";
import OnboardingSliderStyle from "./OnboardingSliderStyle";
import market from "../../../assets/Images/market-login.jpg";
import community from "../../../assets/Images/global-community.jpg";
import customer_service from "../../../assets/Images/customer-care.jpg";

type sliderControl = {
  slider: any;
};

const OnboardingSlider = ({ slider }: sliderControl) => {
  const [selected, setSelected] = useState<number>(0);

  const fields = [
    {
      image: `${market}`,
      title: "market",
      text: "this is a market",
    },
    {
      image: `${community}`,
      title: "community",
      text: "this is a market",
    },
    {
      image: `${customer_service}`,
      title: "customer service",
      text: "this is a market",
    },
  ];

  const nextImageHandler = (i: number, arr: any) => {
    if (i === arr.length - 1) {
    } else {
      setSelected(++i);
    }
  };

  return (
    <OnboardingSliderStyle>
      <div className="slider__group__container">
        {fields.map((item, i, arr) => {
          return (
            <div
              className={`slider__group ${selected === i ? "visible" : null}`}
              key={i}
            >
              <div>
                <Slider {...item} />
                <div className={`direction__group`}>
                  <p
                    className={`direction ${selected === 2 ? "hidden" : null}`}
                    onClick={() => {
                      nextImageHandler(i, arr);
                    }}
                  >
                    Next
                  </p>
                  <p
                    className={`direction ${selected === 2 ? null : "hidden"}`}
                    onClick={slider}
                  >
                    Get Started
                  </p>
                </div>
                {
                  <div className="dot__group">
                    <div
                      className={`dot ${selected === 0 ? "active" : null}`}
                      onClick={() => setSelected(0)}
                    ></div>
                    <div
                      className={`dot ${selected === 1 ? "active" : null}`}
                      onClick={() => setSelected(1)}
                    ></div>
                    <div
                      className={`dot ${selected === 2 ? "active" : null}`}
                      onClick={() => setSelected(2)}
                    ></div>
                  </div>
                }
              
              </div>
            </div>
          );
        })}
      </div>
    </OnboardingSliderStyle>
  );
};

export default OnboardingSlider;
