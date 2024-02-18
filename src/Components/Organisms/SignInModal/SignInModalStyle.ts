import styled from "styled-components";
import { LightModeColor, DarkModeColor } from "../../Molecule/Colors/Colors";
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

  // .signin__header__img {
  //   display: flex;
  //   justify-content: end;
  //   padding: 12px;
  //   img {
  //     margin-left: auto;
  //     cursor: pointer;
  //   }
  // }

  .signin__header {
    display: flex;
    justify-content: center;
    margin: 24px 0 12px 0;
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
          color: #ff0000;
        }
      }
      .input {
        display: block;
        padding: 10px 65px 10px 8px;
        width: 280px;
        font-size: 14px;

        border-outline: none;
        border: none;
        border-bottom: 1px solid grey;
      }
    }

    .button {
      padding: 12px 65px;
      width: 280px;
      margin: 14px;
      font-size: 14px;
      border-radius: 16px;
      border: none;
      background-color: #000;
      color: #fff;
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
      margin: 15px 0 25px 0;
      font-size: 14px;
      span {
        color: blue;
        cursor: pointer;
      }
    }
  }

  .password__group {
    display: flex;

    // small{
    //   position: absolute;
    // }

    .eyes__group {
      cursor: pointer;
      margin-left: -60px;
      margin-top: 30px;

      img {
        width: 20px;
      }
    }
  }

  #light {
    background-color: ${LightModeColor.lightblue};
  }

  #dark {
    background-color: ${DarkModeColor.black};
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
