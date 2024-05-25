import styled from "styled-components";
import { LightModeColor, DarkModeColor } from "../../Atom/Colors/Colors";

const AddProductModalStyle = styled.div`
  form::-webkit-scrollbar {
    display: none;
  }

  #light {
    background-color: ${LightModeColor.backgroundVariant};
    .images__container {
      background-color: ${LightModeColor.background};
    }
    .main__images {
      background-color: ${LightModeColor.backgroundVariant3};
    }

    .general__information,
    .Price__information {
      background-color: ${LightModeColor.background};
    }

    input,
    textarea {
      background-color: ${LightModeColor.backgroundVariant3};
    }

    .deselected {
      background-color: ${LightModeColor.backgroundVariant3};
      input {
        background-color: ${LightModeColor.backgroundVariant3};
      }
    }

    .selected {
      background-color: ${LightModeColor.buttonbackground};
      color: ${LightModeColor.secondary};
      input {
        background-color: ${LightModeColor.buttonbackground};
      }
    }

    .button {
      background-color: ${LightModeColor.buttonbackground};
    }
  }

  #dark {
    background-color: ${DarkModeColor.backgroundVariant};
    .images__container {
      background-color: ${DarkModeColor.background};
    }
    .main__images {
      background-color: ${DarkModeColor.backgroundVariant2};
    }

    .general__information,
    .Price__information {
      background-color: $DarkModeColorr.background;
    }
  }

  input,
  textarea {
    background-color: ${DarkModeColor.backgroundVariant2};
  }

  .deselected {
    background-color: ${DarkModeColor.backgroundVariant2};
    input {
      background-color: ${DarkModeColor.backgroundVariant2};
    }
  }

  .selected {
    background-color: ${DarkModeColor.primaryVariant};
    color: ${DarkModeColor.secondary};
    input {
      background-color: ${DarkModeColor.primaryVariant};
    }
  }

  .button {
    background-color: ${DarkModeColor.primaryVariant};
  }

  form {
    padding: 30px 20px;
    z-index: 4;
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow: auto;
  }

  .loading__icon {
    animation: swing 1s infinite;
  }

  @keyframes swing {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .addProduct__header {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 7px;
    img {
      width: 20px;
    }
  }

  .addProduct__grid__container {
    .input__container {
      display: flex;
      flex-direction: column;
      justify-content: start;
      margin: 10px 0;
      label {
        margin-bottom: 10px;
        font-weight: 500;
        font-size: 14px;
      }
      input {
        padding: 10px 10px;
        border-radius: 8px;
        font-size: 14px;
        border: none;
      }
      textarea {
        resize: none;
        border-radius: 10px;
        padding: 10px;
        font-size: 14px;
        border: none;
      }
    }
    .size__container {
      margin-top: 20px;
      p {
        font-weight: 500;
      }
      small {
        font-size: 10px;
      }
    }

    h2 {
      font-size: 18px;
      margin-bottom: 20px;
    }

    .small__boxes__container {
      display: flex;
      justify-content: start;
      gap: 8px;

      .small__box {
        cursor: pointer;
        border-radius: 5px;
        margin-top: 10px;

        padding: 8px;
        font-size: 15px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2px;
        border: none;
        outline: none;
        input {
          width: 100%;
          border: none;
          outline: none;
          cursor: pointer;
        }
      }
      .small_width {
        width: 40px;
      }
      .large_width {
        width: 80px;
      }
      img {
        width: 10px;
      }
    }

    .images__container {
      width: 100%;
      border-radius: 10px;
      // border: 1px solid;

      margin-top: 30px;
      padding: 20px;
    }
    .main__images {
      width: 100%;
      height: 350px;
      // border: 1px solid;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        border-radius: 10px;
        width: 250px;
        max-height: 330px;
      }
    }
    .sub__images__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      margin-top: 20px;

      .sub__image {
        border-radius: 5px;
        width: 70px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .img {
        // padding: 5px;
        width: 100%;
        height: 80px;
        border-radius: 10px;
        cursor: pointer;
      }
      .small_img {
        width: 15px;
      }
      .add__icon__img {
        border: 1px dashed;
        .img {
          width: 30px;
        }
        .loading__icon {
          width: 50px;
        }
      }
      .absolute {
        position: absolute;
        margin-bottom: 90px;
        margin-left: 60px;
        cursor: pointer;
      }
    }
    #paddingleft {
      padding-left: 30px;
    }
    .margin {
      margin-top: 20px;
    }
  }

  .grid__container__two {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .general__information,
  .Price__information {
    padding: 20px;
    border-radius: 10px;
    margin-top: 30px;
    .image {
      width: 15px;
      height: 15px;
      margin: -28px 0 10px 12px;
    }
  }

  .button__group {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .button {
    margin-top: 10px;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

  .hidden {
    display: none;
    width: 0;
  }

  @media (min-width: 1080px) {
    form {
      padding: 30px 40px;
      // width: 90vw;
      // right: 0;
      // left: 30vw;
    }

    .images__container {
      width: 50%;
    }

    .addProduct__grid__container {
      display: grid;
      grid-template-columns: 60% 35%;
      gap: 5%;
    }
    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      input {
        width: 20vw;
      }
    }
    .button__group {
      justify-content: end;
      gap: 40px;
    }
  }
`;

export default AddProductModalStyle;
