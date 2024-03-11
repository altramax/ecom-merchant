import styled from "styled-components";
import { DarkModeColor} from "../../Atom/Colors/Colors";

const OnboardingTemplateStyle = styled.div`
  .skip,
  .previous {
    position: absolute;
    top: 40px;
    left: 80%;
    z-index: 10;
    cursor: pointer;
    // margin: 20px auto;
    width: fit-content;
    background-color: #dff3fc;
    padding: 4px 10px;
    border-radius: 3px;
    color: #0097da;
    font-weight: 700;
    box-shadow: inset 0 0 0 0 #0097da;
    transition: box-shadow 0.6s ease-in-out;
    .hidden {
      display: none;
    }
  }

  .skip:hover,
  .previous:hover {
    color: #fff;
    box-shadow: inset 65px 0 0 0 #0097da;
    transition: box-shadow 0.6s ease-in-out;
  }

  .internet__error {
    padding: 12px 20px;
    color: red;
    background-color: #fff;
    position: absolute;
    top: 0;
    right: 20px;
  }

  .onboarding__container {
    width: 100vw;
    height: 100vh;
    display: flex;
    .slider {
      width: 100%;
    }
    .login {
      width: 100%;
    }
  }

  .shown {
    display: block;
  }
  .hidden {
    display: none;
  }

  #dark {
      .slider {
        background-color: ${DarkModeColor.backgroundvariant3};
      }
  }

  @media (min-width: 1028px) {
    .skip,
    .previous {
      display: none;
    }

    .shown {
      display: block;
    }
    .hidden {
      display: block;
    }

    .onboarding__container {
      display: flex;
      .slider {
        width: 50%;
      }
      .login {
        width: 50%;
        display: block;
      }
    }
  }
`;
export default OnboardingTemplateStyle;
