import styled from "styled-components";
import { LightModeColor, DarkModeColor } from "../../Atom/Colors/Colors";


const SignUpModalStyle = styled.div`
.signup__form{
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .visible{
    display: block;
  }
  .hidden{
    display: none;
  }
}

  .signup {
    background-color: #fff; 

    width: fit;
    border-radius: 12px;
    h2 {
      font-size: 20px;
      letter-spacing: 0;
      position: fixed;
    }
  }
  
  .signup__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 40px 0 0 0;
    font-family: "Bruno Ace SC", cursive;
  }


  .signup__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 20px;

    h1 {
      font-size: 50px;
    }

    .signup__body__welcome {
      margin-top: 20px;
      p {
        font-weight: 600;
      }
    }

    .signup__body__googlelogin {
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

    .signup__dash {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      margin: 25px 0;

      div {
      }
    }

    .signup__inputs {
      .input__group{
        margin: 24px;
        .small{
          text-align: start;
          display: block;
          margin: 5px 0;
          color: #ff0000;
        }
      }
      .input {
        display: block;
        padding: 10px 45px 10px 8px;
        width: 280px;
        font-size: 14px;
        border: none;
      }
    }
    .button {
      height: 40px;
      width: 280px;
      margin: 14px;
      font-size: 14px;
      border-radius: 16px;
      border: none;
      cursor: pointer;

    }

    .signin {
      margin: 20px 0 40px 0;
      font-size: 14px;
      span {
        color: blue;
      cursor: pointer;
      }
    }
  }

  .password__group{
    display: flex;
    margin-top: -24px;
     .eyes__group{
      cursor: pointer;
      margin-left: -60px;
      margin-top: 35px;
      img{
        width: 20px;
      }
     }
  }


  #light {
    background-color: ${LightModeColor.primary};
    .signup{
      background-color: ${LightModeColor.background};
   
      .signup__header{
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
        color: ${LightModeColor.secondary};
        background-color: ${LightModeColor.primary}
      }
    }
    .signup__dash, .signup__body__googlelogin, .signup{
      color: ${LightModeColor.secondary};
      span{
        color: ${LightModeColor.primaryVariant};
      }
    }
  }

  #dark {
    background-color: ${DarkModeColor.backgroundVariant};
    .signup{
      background-color: ${DarkModeColor.backgroundVariant2};
   
      .signup__header{
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
    .signup__dash, .signup__body__googlelogin, .signup{
      color: ${DarkModeColor.secondary};
      span{
        color: ${DarkModeColor.primary};
      }
    }
  }

  @media (min-width: 1280px) {


    .signup {
      h2 {
        font-size: 25px;
      }
    }

    .signup__body {
      h1 {
        font-size: 70px;
      }
    }
  }
`;

export default SignUpModalStyle;
