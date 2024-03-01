import { useState } from "react";
import Slider from "../../Molecule/Slider/Slider";
import OnboardingSliderStyle from "./OnboardingSliderStyle";
import market from "../../../assets/Images/market-login.jpg";
import community from "../../../assets/Images/global-community.jpg";
import customer_service from "../../../assets/Images/customer-care.jpg";
import { useAppSelector } from "../../../Redux/Hooks";
import Button from "../../Molecule/Button/Button";
import customercare_nightmode from "../../../assets/Icons/customerCare-nightmode.jpg";
import community_nightmode from "../../../assets/Icons/community-nightmode.jpg";
import market_nightmode from "../../../assets/Icons/market-nightmode.jpg"

type sliderControl = {
  slider: any;
};

const OnboardingSlider = ({ slider }: sliderControl) => {
  const [selected, setSelected] = useState<number>(0);
  // const dispatch = useAppDispatch();
  const color = useAppSelector((state: any) => state.color);

  const fields = [
    {
      image: `${color.mode === "dark" ? market_nightmode : market}`,
      title: "Market",
      text: "Join our altra modern market place where your items are seen by over 1 million people globally",
    },
    {
      image: `${color.mode === "dark" ? community_nightmode : community}`,
      title: "community",
      text: "We have a community of dedicated customers all over the world who value our services",
    },
    {
      image: `${color.mode === "dark" ? customercare_nightmode : customer_service}`,
      title: "customer service",
      text: "Our customer service is one of a kind with 24hrs availability, and very understanding agents. ",
    },
  ];

  const nextImageHandler = (i: number, arr: any) => {
    if (i === arr.length - 1) {
    } else {
      setSelected(++i);
    }
  };

  console.log(color.mode);

  return (
    <OnboardingSliderStyle>
      <div id={`${color.mode}`} className="slider__group__container">
        {fields.map((item, i, arr) => {
          return (
            <div
              className={`slider__group ${selected === i ? "visible" : null}`}
              key={i}
            >
              <div>
                <Slider {...item} />
                <div className={`direction__group`}>
                  <Button
                    value="Next"
                    Click={() => {
                      nextImageHandler(i, arr);
                    }}
                    type= {undefined}
                    className={`direction ${selected === 2 ? "hidden" : null}`}
                  />
                  <Button
                    value="Get Started"
                    type= {undefined}
                    Click={slider}
                    className={`direction ${selected === 2 ? null : "hidden"}`}
                  />
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
