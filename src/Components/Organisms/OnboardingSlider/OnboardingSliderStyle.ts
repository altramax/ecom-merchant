import styled from "styled-components";

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
    margin: 20px auto;
    width: fit-content;
    background-color: #DFF3FC;
    padding: 4px 10px;
    border-radius: 3px;  
    color:  #0097DA;
    font-weight: 700;
    .hidden {
      display: none;
    }
  }

  .direction__group:hover{
    color: #fff;
    background-color:  #0097DA;
  }

  @media (min-width: 1028px) {
    .skip {
      display: none;
    }

    .direction__group {
      display: none;
    }
  }
`;
export default OnboardingSliderStyle;
