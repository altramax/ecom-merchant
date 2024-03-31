import styled from "styled-components";
import { DarkModeColor, LightModeColor } from "../../Atom/Colors/Colors";

const LoadingModalStyle = styled.div`
  z-index: 500;
  .loading__container {
    width: 100vw;
    height: 100vh;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    align-content: center;
    .logo-img {
      width: 10vmax;
    }
  }

  .loading {
    width: 6vmax;
    height: 6vmax;
    border-right: 4px solid;
    border-radius: 100%;
    animation: spinRight 800ms linear infinite;

    &:before,
    &:after {
      content: "";
      width: 6vmax;
      height: 6vmax;
      display: block;
      position: absolute;
      top: calc(50% - 3vmax);
      left: calc(50% - 3vmax);
      border-left: 3px solid;
      border-radius: 100%;
      animation: spinLeft 800ms linear infinite;
    }

    &:after {
      width: 4vmax;
      height: 4vmax;
      top: calc(50% - 2vmax);
      left: calc(50% - 2vmax);
      border: 0;
      border-right: 2px solid;
      animation: none;
    }
  }

  @keyframes spinLeft {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(720deg);
    }
  }

  @keyframes spinRight {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }

  #dark {
    background-color: ${DarkModeColor.primary};

    .loading {
      border-color: #000;
      &:before,
      &:after {
        border-color: #000;
      }
      &:after {
        border-color: #000;
      }
    }
  }

  #light {
    background-color: ${LightModeColor.primary};

    .loading {
      border-color: #000;
      &:before,
      &:after {
        border-color: #000;
      }
      &:after {
        border-color: #000;
      }
    }
  }
`;

export default LoadingModalStyle;
