import styled from "styled-components";
import { LightModeColor, DarkModeColor } from "../../Atom/Colors/Colors";
// import { lightmode } from "../../../Redux/ColorSlice";

const SignInModalStyle = styled.div`
  .test-img {
    width: 30px;
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

  .signin__form {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .visible {
      display: block;
    }
    .hidden {
      display: none;
    }
  }

  .signin {
    background-color: #fff;
    width: fit-content;
    border-radius: 12px;
    h2 {
      font-size: 20px;
      letter-spacing: 0;
      position: fixed;
    }
  }

  .signin__header {
    display: flex;
    justify-content: center;
    margin: 40px 0 0 0;
    font-family: "Bruno Ace SC", cursive;
  }

  .signin__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 20px;

    .signin__inputs {
      .input__group {
        margin: 24px;
        .small {
          text-align: start;
          display: block;
          margin: 5px 0;
        }
      }
      .input {
        display: block;
        padding: 10px 65px 10px 8px;
        width: 280px;
        height: 40px;
        font-size: 14px;
        border: none;
      
      }
    }

    .button {
      height: 40px;
      width: 280px;
      margin: 14px;
      font-size: 15px;
      border-radius: 8px;
      border: none;
      cursor: pointer;
    }

    .signin__body__googlelogin {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      border: 1px solid grey;
      border-radius: 12px;
      padding: 8px 36px;
      margin: 14px;
      width: 280px;
      cursor: pointer;
      p {
        font-size: 14px;
      }

      img {
        width: 20px;
      }
    }

    .signin__dash {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      margin: 25px 0;
    }
    .signup {
      margin: 15px 0 40px 0;
      font-size: 14px;
      span {
        cursor: pointer;
      }
    }
  }

  .password__group {
    display: flex;

    .eyes__group {
      cursor: pointer;
      margin-left: -60px;
      margin-top: 34px;

      img {
        width: 20px;
      }
    }
  }

  #light {
    background-color: ${LightModeColor.primary};
    .signin{
      background-color: ${LightModeColor.background};
   
      .signin__header{
        color:${LightModeColor.secondary}
      }
      .input__group{
        input{
          background-color: ${LightModeColor.background} !important;
          color: ${LightModeColor.secondary};
         
          border-bottom: 1px solid;
        }
        small{
          color: ${LightModeColor.error}
        }
      }
      .button{
        color: ${LightModeColor.background};
        background-color: ${LightModeColor.primary}
      }
    }
    .signin__dash, .signin__body__googlelogin, .signup{
      color: ${LightModeColor.secondary};
      span{
        color: ${LightModeColor.primary};
      }
    }
  }

  #dark {
    background-color: ${DarkModeColor.backgroundVariant};
    .signin{
      background-color: ${DarkModeColor.backgroundVariant2};
   
      .signin__header{
        color:${DarkModeColor.secondary}
      }
      .input__group{
        input{
          background-color: ${DarkModeColor.backgroundVariant} !important;
          color: ${DarkModeColor.secondary};
          border-radius: 8px;
        }
        small{
          color: ${DarkModeColor.error}
        }
      }
      .button{
        color: ${DarkModeColor.background};
        background-color: ${DarkModeColor.primary}
      }
    }
    .signin__dash, .signin__body__googlelogin, .signup{
      color: ${DarkModeColor.secondary};
      span{
        color: ${DarkModeColor.primary};
      }
    }
  }

  @media (min-width: 1280px) {
    .signin {
      h2 {
        font-size: 25px;
      }
    }

    .signin__body {
      h1 {
        font-size: 70px;
      }
    }
  }
`;
export default SignInModalStyle;
