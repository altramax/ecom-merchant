import styled from "styled-components";
import { LightModeColor, DarkModeColor } from "../../Molecule/Colors/Colors";
// import { lightmode } from "../../../Redux/ColorSlice";

const NavbarTemplateStyle = styled.div`
  #light {
    background-color: ${LightModeColor.lightblue};
  }
  #dark {
    background-color: ${DarkModeColor.shallow};
  }

  .network__response {
    animation: growDown 300ms ease-in-out forwards;
    transform-origin: top center;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 12px;
    padding: 5px 10px;
    background-color: green;
    color: #fff;
    margin: 24px 24px 0 0;
    z-index: 200;
    border-radius: 6px;
  }

  .nav__container {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justifty-content: center;
    align-items: center;
    position: absolute;
    width: 30%;
    height: 100vh;
    transition: width 0.6s ease-in-out, background-color 0.2s ease-in-out;

    .link__groups {
      background-color: red;
      width: fit-content;
      .link__sub__group {
        padding: 20px 0;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 8px;
        img {
          width: 15px;
        }
        .p {
          transition: opacity 1s ease-in-out;
        }
      }
    }

    .heading__container {
     display: flex;
     justify-content: center;
     button{
      cursor:pointer;
     }
     h1{
    //  transition: opacity 0.2s ease-in-out;
     }
    }

  }

  .contract {
    width: 7%;
    .link__groups {
      .link__sub__group {
        gap: 0;
        p {
          transition: opacity 0.2s ease-in-out;
          opacity: 0;
          width: 0;
        }
      }
    }
    .heading__container{
      h1{
        opacity: 0;
        width: 0;
      }
      button{
        width: fit-content;
      }
    }
  }

  @media (min-width: 1080px) {
    .nav__container {
      width: 20%;

      .link__groups {
        .link__sub__group {
          padding: 20px 0;
          // gap: 8px;
          img {
            width: 20px;
          }
          .p {
            transition: opacity 1s ease-in-out;
          }
        }
      }
    }
    .contract {
      width: 5%;
    }
  }
`;

export default NavbarTemplateStyle;
