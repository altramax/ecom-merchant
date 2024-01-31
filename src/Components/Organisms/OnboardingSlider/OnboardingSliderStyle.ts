import styled from "styled-components";
import { LightModeColor, DarkModeColor } from "../../Molecule/Colors/Colors";

const OnboardingSliderStyle = styled.div`
  .slider__group {
    display: none;
    // box-shadow: 0 2px 300px #808080;
    // border-radius: 20px;
    // padding: 20px;
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
        border: 1px solid #808080;
      }
      .active {
        background-color: #0097da;
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
    cursor: pointer;
    margin: 40px auto;
    width: fit-content;
    background-color: #dff3fc;
    padding: 4px 10px;
    border-radius: 3px;
    font-weight: 700;
    transition: box-shadow 0.6s ease-in-out;
    .hidden {
      display: none;
    }
  }

  .direction__group:hover {
    transition: box-shadow 0.6s ease-in-out;
  }

  

  #light {
    .dot {
      border: 1px solid ${LightModeColor.Deepblue};
    }
    .direction__group {
      color: ${LightModeColor.Deepblue};
      box-shadow: inset  0 0 0 0 ${LightModeColor.Deepblue};
    }
    .direction__group:hover {
      color: ${LightModeColor.white};
      box-shadow: inset 65px 0 0 0 ${LightModeColor.Deepblue};
    }
  }

  #dark {
    .dot {
      border: 1px solid ${DarkModeColor.darkblue};
    }
    .direction__group {
      color: ${DarkModeColor.black};
    }
    .direction__group:hover {
      color: ${DarkModeColor.shallow};
      box-shadow: inset 65px 0 0 0 ${DarkModeColor.shallow};
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
