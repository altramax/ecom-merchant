import styled from "styled-components";
import { LightModeColor, DarkModeColor } from "../../Atom/Colors/Colors";
import night__sky from "../../../assets/Images/night__sky.jpg";
import day__sky from "../../../assets/Images/day__sky.jpg";

const NavbarTemplateStyle = styled.div`
  #light {
    background-color: ${LightModeColor.primary};
    .link__sub__group:hover {
      background-color: ${LightModeColor.secondary};
    }
  }
  #dark {
    background-color: ${DarkModeColor.primary};
    .link__sub__group:hover {
      background-color: ${DarkModeColor.backgroundVariant};
    }
  }

  .hidden {
    display: none;
  }

  .hamburger__container {
    position: absolute;
    cursor: pointer;
    width: 7%;
    // height: 20px;
    left: 0;
    z-index: 30;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    img {
      width: 20px;
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
    width: 50%;
    height: 100vh;
    transition: width 0.5s ease-in-out, background-color 0.2s ease-in-out;

    .nav__link__groups {
      width: 70%;
      .link__sub__group {
        width: 100%;
        border-radius: 3px;
        padding: 5px 5px;
        margin: 20px 0;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 8px;
        font-size: 14px;

        img {
          width: 15px;
        }
      }
    }

    .slowVisibility {
      transition: opacity 1s ease-in-out;
    }

    .nav__heading__container {
      margin-bottom: 20px;
      width: 70%;
      height: 30px;

      font-size: 14px;
    }
  }

  .nav__profile__group {
    position: absolute;
    bottom: 30px;
    cursor: pointer;
    // left: 15%;
    // width: 70%;

    .nav__profile {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      transition: bottom 1s ease-in;
      .store__email {
        font-size: 12px;
        text-wrap: wrap;
      }
    }
    .profile__dropDown {
      // display: none;
    }
    .profile__dropDown__tools {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .theme__button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70px;
    transition: background-image 1s ease-in;
    border-radius: 100px;

    cursor: pointer;

    .moon {
      border-radius: 50%;
      margin-left: auto;
    }
    .sun {
      border-radius: 50%;
    }

    .img__container {
      width: 30px;
      padding: 5px;
      opacity: 1;
      img {
        display: block;
        width: 100%;
      }
    }
  }

  .light {
    background-image: url(${day__sky});
    background-size: 100%;
    .moon {
      opacity: 0;
    }
  }

  .dark {
    background-image: url(${night__sky});
    background-size: 100%;
    .sun {
      opacity: 0;
    }
  }

  .contract {
    width: 7%;
    cursor: pointer;

    .nav__link__groups {
      .link__sub__group {
        gap: 0;
        justify-content: center;
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

        height: 30px;
      }
    }

    .nav__profile__group {
      gap: 0;
      .nav__profile {
        gap: 0;
      }
      .nav__profile__text__group {
        opacity: 0;
        width: 0;
      }
    }
  }

  @media (min-width: 1080px) {
    .hamburger__container {
      margin-top: 28px;
      width: 5%;
      img {
        width: 30px;
      }
    }

    .nav__container {
      width: 25%;

      .nav__heading__container {
        width: 57%;
        font-size: 16px;
      }

      .nav__link__groups {
        .link__sub__group {
          padding: 8px 20px;
          font-size: 15px;

          img {
            width: 25px;
          }
          .p {
            transition: opacity 1s ease-in-out;
          }
        }
      }

      .nav__profile__group {
        // left: 0;
      }
    }

    .contract {
      width: 5%;
      // .nav__profile__group {
      //   .nav__profile {
      //     gap: 100px;
      //   }
      // }
    }
  }
`;

export default NavbarTemplateStyle;
