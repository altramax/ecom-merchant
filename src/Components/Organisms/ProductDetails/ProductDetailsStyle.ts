import styled from "styled-components";
import { DarkModeColor, LightModeColor } from "../../Atom/Colors/Colors";

const ProductDetailsStyle = styled.div`
  #dark {
    background-color: ${DarkModeColor.background};
    color: ${DarkModeColor.secondary};
  }

  #light {
    background-color: ${LightModeColor.background};
    color: ${LightModeColor.secondary};
  }

  .modal__container::-webkit-scrollbar{
    display: none;
  }

  .modal__container {
    width: 100%;
    height: 450px;
    overflow-y: scroll;
    color: #000000;
    z-index: 3;
    position: fixed;
    bottom: 0;
    left: 0;

    .cancleIcon {
      width: 100%;
      cursor: pointer;
      margin: 10px 0;
      .cancleIcon__img {
        width: 40px;
        margin: auto;
        display: block;
      }
    }
    .modalFlex {
      padding: 20px;
      h2 {
        font-size: 20px;
      }
    }

    .modalImageGroup {
      h2 {
        margin-bottom: 10px;
      }
    }

    .modalImage {
      display: flex;
      justify-content: center;
      img {
        width: 200px;
        margin-bottom: 15px;
      }
    }

    .descriptionGroup {
      margin: auto;
      h3 {
        text-align: start;
        margin-right: auto;
        span{
          font-weight: 300;
          font-size: 15px;
        }
      }
    }
  }

  .overlayModal {
    background-color: #0f0f0f;
    position: fixed;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
  }

  @media (min-width: 768px) {
    .modalFlex {
      width: 90%;
      display: flex;
      justify-content: space-between;
      align-items: start;
      margin: auto;
      .descriptionGroup,
      .modalImageGroup {
        width: 50%;
        text-align: center;
        .modalImage {
          display: block;
        }
        h3{
          width: 80%;
          margin: auto;
        }
      }
      .descriptionGroup{
        text-align: start;
        margin: 0;
      }
    }
  }

  @media (min-width: 1080px){
    .modalFlex {
      width: 80%;}
  }
`;
export default ProductDetailsStyle;
