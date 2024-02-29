import styled from "styled-components";
import { DarkModeColor, LightModeColor } from "../../Atom/Colors/Colors";

const ButtonStyle = styled.div`

.loading__icon {
    height: 30px;
    width: 20%;
    animation: swing 1s infinite;
  }

  @keyframes swing {
    0%{
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }


  .style {
    height: 40px;
    padding: 10px 20px;
    width: fit-content;
    margin: 14px;
    font-size: 14px;
    border-radius: 16px;
    border: none;
    cursor: pointer;
  }

  #buttonlight {
    background-color: ${LightModeColor.primary};
    color: ${LightModeColor.secondary}
  }

  #buttondark {
    background-color: ${DarkModeColor.primary};
    color: ${DarkModeColor.background}
  }
`;

export default ButtonStyle;