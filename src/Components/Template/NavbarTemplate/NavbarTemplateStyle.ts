import styled from "styled-components";
import { LightModeColor, DarkModeColor } from "../../Atom/Colors/Colors";
import night__sky from "../../../assets/Images/night__sky.jpg";
import day__sky from "../../../assets/Images/day__sky.jpg";

const NavbarTemplateStyle = styled.div`
  #light {
    background-color: ${LightModeColor.primary};
    .link__sub__group {
      p {
        color: ${LightModeColor.secondary};
      }
    }
    .link__sub__group:hover {
      background-color: ${LightModeColor.primaryVariant};
    }
    .nav__heading__container {
   
      h3 {
        color: ${LightModeColor.secondary};
      }
     
    }
    .nav__profile {
      color: ${LightModeColor.secondary};
      .logout__group {
      }
    }
    .logout {
      color: ${LightModeColor.secondary};
    }
  }
  #dark {
    background-color: ${DarkModeColor.background};
    .link__sub__group {
      p {
        color: ${DarkModeColor.secondary};
      }
    }
    .link__sub__group:hover {
      background-color: ${DarkModeColor.backgroundVariant2};
    }
    .nav__heading__container {
   
      h3 {
        color: ${DarkModeColor.secondary};
      }
     
    }
    .nav__profile {
      color: ${DarkModeColor.secondary};
      .logout__group {
      }
    }
    .logout {
      color: ${DarkModeColor.secondary};
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

  .open__nav {
    width: 50%;
  }

  .nav__container {
    
    padding: 30px 0 30px 0;
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    align-items: center;
    position: fixed;
    height: 100dvh;
    transition: width 0.5s ease-in-out;

    .nav__link__groups {
      .link__sub__group {
        width: 100%;
        border-radius: 3px;
        padding: 5px 8px;
        margin: 20px 0;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 8px;
        font-size: 14px;

        img {
          width: 20px;
        }
      }
    }

    .slowVisibility {
      transition: opacity 1s ease-in-out;
    }

    .nav__container__navigations {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;
    }

    .nav__heading__container {
      display: flex;
      justify-content: start;
      align-items: center;
      height: 50px;
      gap: 3px;

      font-size: 14px;
      .logo__container {
        cursor: pointer;
        .light__logo,
        .dark__logo{
          width: 30px;
          height: 30px;
        }
        // .arrow {
        //   position: absolute;
        //   margin-left: -10px;
        //   margin-top: 15px;
        //   width: 20px;
        //   height: 20px;
        // }
      }

      .hamburger__container {
        // padding: 0 8px;

        img {
          width: 25px;
          display: block;
        }
      }
    }
  }

  .nav__profile__group {
    cursor: pointer;
    width: fit-content;
    margin-top: auto;
    .nav__profile {
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 10px;
      transition: bottom 1s ease-in;
      .store__email {
        font-size: 8px;
        text-wrap: wrap;
      }
      .store__name {
        font-size: 12px;
        font-weight: 600;
      }
    }
  }

  .logout__group {
    transition: width 0.5s ease-in-out;
    margin-top: 20px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
    img {
      width: 20px;
    }
    .logout {
      padding: 5px 11px 5px 0;
      background: none;
      border: none;
      cursor: pointer;
    }
  }

  .theme__button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70px;
    transition: background-image 1s ease-in;
    border-radius: 100px;
    margin: 10px auto 0 auto;
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

  .contract__nav {
    width: 10%;

    .nav__link__groups {
      .link__sub__group {
        gap: 0;
        justify-content: center;
        p {
          opacity: 0;
          width: 0;
        }
      }
    }

    .nav__container__navigations {
      align-items: center;
    }

    .nav__heading__container {
      gap: 0;
      h3 {
        opacity: 0;
        width: 0;
      }
    }

    .nav__profile__group {
      gap: 0;
      width: fit-content;
      .nav__profile {
        justify-content: center;
        gap: 0;
        .arrowdown {
          transition: opacity 1s ease;
          opacity: 0;
          width: 0;
        }
      }
      .nav__profile__text__group {
        opacity: 0;
        width: 0;
      }
    }
    .logout__group {
      justify-content: center;
      gap: 0;
      .logout {
        opacity: 0;
        width: 0;
        padding: 0;
      }
    }
    .theme__button {
      width: 30px;
    }
  }

  @media (min-width: 768px) {
    .open__nav {
      width: 25%;
    }
    .nav__heading__container{
      gap: 10px;
    }
    .contract__nav {
      width: 6%;
      .theme__button {
        width: 40px;
      }
    }
  }

  @media (min-width: 1080px) {
    .open__nav {
      width: 100%;
    }

    .nav__container {
      position: relative;
      .nav__heading__container {
        font-size: 16px;
        .hamburger__container {
          padding: 0 12px;

          img {
            width: 30px;
          }
        }
        .logo__container {
          .light__logo,
          .dark__logo {
            width: 40px;
            height: 40px;
          }
        }
      }

      .nav__link__groups {
        .link__sub__group {
          padding: 8px 12px;
          font-size: 15px;

          img {
            width: 25px;
          }
          .p {
            transition: opacity 1s ease-in-out;
          }
        }
      }
    }

    .contract__nav {
      width: 100%;
      .theme__button {
        width: 50px;
      }
    }
    .logout__group {
      img {
        width: 30px;
      }
      .logout {
        font-size: 15px;
        // font-weight: 500px;
      }
    }
  }
`;

export default NavbarTemplateStyle;
