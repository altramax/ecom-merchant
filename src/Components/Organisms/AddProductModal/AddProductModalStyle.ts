import styled from "styled-components";
import { LightModeColor } from "../../Atom/Colors/Colors";

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
    .selected {
      background-color: #99f3fc;

      color: ${LightModeColor.secondary};
    }
  }

  form {
    padding: 30px 20px;
    z-index: 4;
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow: auto;
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
        outline: none;
        border-radius: 8px;
      }
      textarea {
        resize: none;
        border-radius: 10px;
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
        background-color: #fff;
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
    .sub__images {
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
        cursor: pointer;
      }
      .img {
        // padding: 5px;
        width: 100%;
        height: 80px;
        border-radius: 10px;
      }
      .add__icon__img {
        border: 1px dashed;
        img {
          width: 30px;
        }
      }
    }
    #paddingleft {
      padding-left: 30px;
    }
    .margin {
      margin-top: 10px;
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
    background-color: #808080;
    margin-top: 30px;
    .image {
      width: 15px;
      height: 15px;
      margin: -28px 0 10px 12px;
    }
  }

  .general__information {
  }

  .button__group {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .button {
    margin-top: 30px;
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
