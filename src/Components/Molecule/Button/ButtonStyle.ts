import styled from "styled-components";
import { DarkModeColor, LightModeColor } from "../Colors/Colors";

const ButtonStyle = styled.div`

.loading__icon {
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
    padding: 10px 20px;
    width: fit-content;
    margin: 14px;
    font-size: 14px;
    border-radius: 16px;
    border: none;
    // background-color: ;
    color: #fff;
    cursor: pointer;
  }

  #light {
    background-color: ${LightModeColor.lightblue};
  }

  #dark {
    background-color: ${DarkModeColor.black};
  }
`;

export default ButtonStyle;