import styled from "styled-components";

const ProductDetailsStyle = styled.div`
  .modal__container {
    background-color: #fff;
    width: 100%;
    height: 30rem;
    overflow-y: scroll;
    color: #000000;
    z-index: 3;
    position: fixed;
    bottom: 0;
    left: 0;

   
      .cancleIcon {
        width: 100%;
        cursor: pointer;
        .cancleIcon__img {
          width: 40px;
          margin: auto;
          display: block;
    
        }
      }
    

    .modalImage {
      display: flex;
      img {
        width: 15rem;
        height: 16rem;
        margin: auto;
      }
    }
    .modalImageGroup {
      padding: 1rem;
    }
    .descriptionGroup {
      padding: 1rem;
      h3 {
        margin: 1rem 0;
      }
      h2 {
        margin-right: auto;
        text-decoration: underline;
      }
    }

    h3 {
      padding: 1rem 1rem 0 0;
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
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: start;
      margin: auto;
      .descriptionGroup,
      .modalImageGroup {
        width: 50%;
      }
      .modalImage {
        display: block;
      }
    }
  }
`;
export default ProductDetailsStyle;
