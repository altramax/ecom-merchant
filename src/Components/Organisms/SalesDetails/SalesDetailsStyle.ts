import styled from "styled-components";
import { DarkModeColor, LightModeColor } from "../../Atom/Colors/Colors";

const SalesDetailsStyle = styled.div`
  #dark {
    background-color: ${DarkModeColor.background};
    color: ${DarkModeColor.secondary};
  }

  #light {
    background-color: ${LightModeColor.primary};  
    color: ${LightModeColor.secondary};
    .sales__details__container__sub{
      background-color: ${LightModeColor.background};
      .sales__details__items{
        background-color: ${LightModeColor.background};
        border-color: ${LightModeColor.primary}
      }
    }
  }

  // .modal__container::-webkit-scrollbar{
  //   display: none;
  // }

  .sales__details__container{
    position: fixed;
    overflow: auto;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 4;
    display: flex;
    justify-content: center;
    padding: 20px 0;
  }
  
  .sales__details__container__sub{
    overflow: scroll;

    border-radius: 10px;
    width: 90%;
    padding: 20px 0px 10px 0px;
      .sales__details__header{
      padding: 0 10px;
      h3{
        font-size: 17px;
        span{
          font-size: 13px;
          font-weight: 300px;
        }
      }
      p{
        font-size: 13px;
        margin: 10px 0;
      }
      .download__group{
      
      }
      .close{
        width: 20px;
        position: absolute;
        top: 40px;
        right:10%;
      }
      }

    
    .download__group {
      margin: 20px auto 0 auto;
      width: fit-content;
      border: 1px solid;
      padding: 3px 7px;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      font-size: 14px;
      img {
        width: 20px;
      }
    }

    .sales__details__items{
      border: 1px solid;
      border-radius: 10px;
      overflow: scroll;
      max-height: 300px;
      // margin: 40px 0;
      margin: 40px 10px;
      .topproduct__container {
        .topproduct__bar {
          border-top: none;
          border-bottom: 1px solid;
          margin: 0;
          padding: 15px;
        }}
    }
    .sales__line{
      margin-top: 10px;
      border: 1px solid;
      width: 100%;
      height: 1px;
    }
  }



  @media (min-width: 768px) {

    .sales__details__container__sub{
      // padding: 30px;
    
      width: 80%;

      .sales__details__header{
        padding: 0 30px;
        width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .close{
    
        right: 14%;
      }
      }

      .sales__details__items{  margin: 40px 30px;}

      .download__group{
        margin-right: 0;
      }
    }

  @media (min-width: 1080px){
    .sales__details__container{
    align-items: center;

    }
    .sales__details__container__sub{
      display: flex;
      justify-content: space-between;
      align-items: start;
      height: fit-content;
      // width: 70%;
      // border: none;
      .sales__details__header{
        .close{
          top: 10%;
          right:10%;
        }
      }
      .sales__line{
        display: none;
    
    }
    .sales__details__list{
      width: 48%; 

    }
    .sales__details__order{
      width: 48%; 
    }
  }
`;
export default SalesDetailsStyle;
