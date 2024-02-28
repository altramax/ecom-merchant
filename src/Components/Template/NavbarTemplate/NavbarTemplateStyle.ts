import styled from "styled-components";
import { LightModeColor, DarkModeColor } from "../../Atom/Colors/Colors";
// import { lightmode } from "../../../Redux/ColorSlice";

const NavbarTemplateStyle = styled.div`
  #light {
    background-color: ${LightModeColor.lightblue};
    .link__sub__group:hover {
      background-color: ${LightModeColor.grey};
    }
  }
  #dark {
    background-color: ${DarkModeColor.shallow};
    .link__sub__group:hover {
      background-color: ${DarkModeColor.darkblue};
    }
  }

  .network__response {
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
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    justifty-content: center;
    align-items: center;
    position: absolute;
    width: 40%;
    height: 100vh;
    transition: width 0.5s ease-in-out, background-color 0.2s ease-in-out;

    .nav__link__groups {
      // background-color: red;
      width: 80%;
      .link__sub__group {
        width: 100%;
        border-radius: 3px;
        padding: 5px 5px;
        margin: 20px 0;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 8px;
        img {
          width: 15px;
        }
      }
    }

    .slowVisibility {
      transition: opacity 1s ease-in-out;
    }

    .nav__heading__container {
      display: flex;
      justify-content: end;
      align-items: center;
      gap: 10px;
      margin-bottom: 20px;
      width: 100%;
      img {
        // position: absolute;
        margin-right: -20px;
        cursor: pointer;
        width: 40px;
        margin-bottom: -10px;
        // display: block;
      }
      .closed {
        display: none;
      }
    }
  }

  .contract {
    width: 7%;

    .nav__link__groups {
      .link__sub__group {
        gap: 0;
        p {
          // transition: opacity 0.2s ease-in-out;
          opacity: 0;
          width: 0;
        }
      }
    }

    .nav__heading__container {
      gap: 0;
      h3 {
        opacity: 0;
        width: 0;
        height: 0;
      }
      img {
        display: none;
      }
      .closed {
        display: block;
      }
    }

    .nav__profile__group{
      gap: 0;
      .nav__profile__text__group{
       opacity: 0;
       width: 0;
      }
    }
  }

  

  .nav__profile__group{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    position: absolute;
    bottom: 30px;
  }

  .logout{
    z-index: 300;
    // position: absolute;
    // bottom: 0;
    // display: none;
  }

  @media (min-width: 1080px) {
    .nav__container {
      width: 20%;
      // padding-top: 70px;

      .nav__heading__container {
        gap: 100px;
      }

      .nav__link__groups {
        .link__sub__group {
        padding: 8px 20px;
        // padding: 20px 0;
          // gap: 8px;
          img {
            width: 25px;
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
