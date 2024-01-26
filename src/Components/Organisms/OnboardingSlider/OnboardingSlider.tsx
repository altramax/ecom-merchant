import { useState } from "react";
import Slider from "../../Molecule/Slider/Slider";
import OnboardingSliderStyle from "./OnboardingSliderStyle";
import market from "../../assets/Images/market-login.jpg";
import community from "../../assets/Images/global-community.jpg";
import customer_service from "../../assets/Images/customer-care.jpg";
import left from "../../assets/Icons/arrow-left.svg";
import right from "../../assets/Icons/arrow-right.svg";

const OnboardingSlider = () => {
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

  const backwardSelectionHandler = (i: number, arr: any) => {
    if(i === 0){   
    }else{
      setSelected(--i)
    }
  };

  const forwardSelectionHandler = (i: number, arr: any) => {
    if(i === arr.length - 1){   
    }else{
      setSelected(++i)
    }
  };

  return (
    <OnboardingSliderStyle>
      <div className='slider__group__container'>
        {fields.map((item, i, arr) => {
          return (
            <div
              className={`slider__group ${ selected === i ? "visible" : null}`}
              key={i}
            >
              <div className={`direction ${i === 0 ? "blur" : ""}`}>
                <div className='left__cover'></div>
                <img
                  src={left}
                  alt='left'
                  onClick={() => backwardSelectionHandler(i, arr)}
                />
              </div>
           
              <Slider {...item} />
              <div className={`direction ${i === arr.length - 1 ? "blur" : ""}`}>
                <div className='right__cover'></div>
                <img
                  src={right}
                  alt='right'
                  onClick={() => forwardSelectionHandler(i, arr)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </OnboardingSliderStyle>
  );
};

export default OnboardingSlider;
