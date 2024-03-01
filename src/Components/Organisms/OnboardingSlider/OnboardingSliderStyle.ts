import styled from "styled-components";
import { LightModeColor, DarkModeColor } from "../../Atom/Colors/Colors";

const OnboardingSliderStyle = styled.div`
  .slider__group {
    display: none;
  }

  .visible {
    display: flex;
  }

  .slider__group__container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    .dot__group {
      margin-top: 30px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      gap: 10px;
      .dot {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        border: 1px solid;
      }
      .active {
        border: none;
      }
    }
  }

  .slider__container {
    img {
      width: 300px;
    }
  }

  .direction__group {
    width: 100%;
    margin: 40px auto;
    .direction {
      display: block;
      margin: auto;
      cursor: pointer;
      width: fit-content;
      background-color: #dff3fc;
      padding: 7px 14px;
      border-radius: 3px;
      font-weight: 700;
      border: none;
    }
    .hidden {
      display: none;
    }
  }


  #light {
    .dot__group{
      .dot {
        border: 1px solid ${LightModeColor.primary};
      }
      .active{
       background-color: ${LightModeColor.primary}
      }
    }
  }

  #dark {
    .slider__group{
      background-color: ${DarkModeColor.backgroundvariant3}
    }
    .dot__group{
      .dot {
        border: 1px solid ${DarkModeColor.primary};
      }
  .active{
    background-color: ${DarkModeColor.primary}
  }
    }
  }

  @media (min-width: 1028px) {
    .skip {
      display: none;
    }

    .direction__group {
      display: none;
    }
    .slider__container {
      img {
        width: 500px;
      }
    }
  }
`;
export default OnboardingSliderStyle;
