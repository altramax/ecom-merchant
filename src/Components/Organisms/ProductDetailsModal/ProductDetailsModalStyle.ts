import styled from "styled-components";
import { DarkModeColor, LightModeColor } from "../../Atom/Colors/Colors";

const ProductDetailsModalStyle = styled.div`
  #dark {
    background-color: ${DarkModeColor.background};
    color: ${DarkModeColor.secondary};
  }

  #light {
    background-color: ${LightModeColor.primary};
    .descriptionGroup, .modalImageGroup{
      // background-color: ${LightModeColor.backgroundVariant};
    }
    color: ${LightModeColor.secondary};
    .cancleIcon {
      background-color: ${LightModeColor.primary};
    }
  }

  .modal__container::-webkit-scrollbar{
    display: none;
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

  @keyframes popUp{
    0%{
        transform: scaleY(0)
    }
    100%{
        transform: scaleY(1)
    }
}

  .products__details__modal__container {
    width: 100%;
    height: 70%;
    overflow-y: scroll;   
    z-index: 3;
    position: fixed;
    bottom: 0;
    left: 0;
    animation: popUp 0.5s ease;
    transform-origin: bottom center;

    .cancleIcon {
      width: 100%;
      cursor: pointer;
      padding: 10px 0; 
      position: sticky;
      top: 0;
      .cancleIcon__img {
        width: 40px;
        margin: auto;
        display: block;
      }
    }
  
  }

  .products__details__modal{
     width: 100%;
    .images__container{
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 10px;
      margin-bottom: 30px;
    padding: 20px;

    }
    .sub__images{
      width: 20%;
      .sub__image{
        display: block;
        width: 100%; 
        padding: 7px 0;
        cursor: pointer;
      }
    }
    .main__images{
      width: 80%;
      img{
        width: 100%;
      
      }
    }
    .discription__container{
      padding: 0 20px 20px 20px;
      .product__name{
        font-weight: 500;
        font-size: 20px;
        margin-bottom: 15px;
      }
      .price{
        font-size: 16px;
      }
      h3{
        margin: 20px 0 10px 0;
      }
      ul{
        padding: 0 20px 20px 20px;
      }
      li{
        padding: 5px;
      }
     
    }
  }

 

  @media (min-width: 768px) {
    .products__details__modal__container {

      // height: 60%;
    }
  }
  @media (min-width: 1080px){
    .products__details__modal{
      display: flex;
      justify-content: start;
      align-items: start;
      gap: 30px;
    }
    .images__container{
      display: flex;
      justify-content: start;
      align-items: center;
      width: 50%;
    }
    .discription__container{
      width: 50%;
      .product__name{
        font-weight: 500;
        font-size: 16px;
      }
      .price{

      }
    }
  }
`;
export default ProductDetailsModalStyle;

// .modalFlex {
//   padding: 20px;
//   h2 {
//     font-size: 20px;
//   }
// }

// .modalImageGroup {
//   h2 {
//     margin-bottom: 10px;
//   }
// }

// .modalImage {
//   display: flex;
//   justify-content: center;
//   img {
//     width: 200px;
//     margin-bottom: 15px;
//   }
// }

// .descriptionGroup {
//   margin: auto;
//   h3 {
//     text-align: start;
//     margin-right: auto;
//     span{
//       font-weight: 300;
//       font-size: 15px;
//     }
//   }
// }

// .modalFlex {
//   width: 90%;
//   display: flex;
//   justify-content: space-between;
//   align-items: start;
//   margin: auto;
//   .descriptionGroup,
//   .modalImageGroup {
//     width: 50%;
//     text-align: center;
//     .modalImage {
//       display: block;
//     }
//     h3{
//       width: 80%;
//       margin: auto;
//     }
//   }
//   .descriptionGroup{
//     text-align: start;
//     margin: 0;
//   }
// }

// .modalFlex {
//   width: 80%;}