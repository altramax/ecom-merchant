import styled from "styled-components";
import { LightModeColor, DarkModeColor } from "../../Atom/Colors/Colors";

const DashboardTemplateStyle = styled.div`
  //  ::-webkit-scrollbar {
  //   display: none;
  // }

  // .route__body ::-webkit-scrollbar {
  //   display: none;
  // }
  // .expand ::-webkit-scrollbar {
  //   display: none;
  // }

  // .dashboard__template__container ::-webkit-scrollbar {
  //   display: none;
  // }


  #light {
    .dashboard__template__container {
      background-color: ${LightModeColor.backgroundVariant};
    }
    .bot {
      transition: 0.7s ease-in;
      background-color: blue;
    }
  }

  #dark {
    .dashboard__template__container {
      background-color: ${DarkModeColor.backgroundVariant};
    }
    .bot {
      transition: 0.7s ease-in;

      background-color: red;
    }
  }

  .bot {
    width: 300px;
    height: 100px;
    margin: 50px;
  }

  .dashboard__template__container {
    .route__body, .expand {
      width: 86.5vw;
      min-height: 100vh;
      margin-left: auto;

    }
    .nav__width {

      z-index: 2;
      position: fixed;
    }


    .contract {
      width: 10vw;
    }
  }


  @media (min-width: 768px) {
    .dashboard__template__container {
      .nav__width {
        width: 25vw;
      }
      .route__body,.expand  {
        transition: width 0.5s ease-in-out;
        width: 92vw;
  
      }

      .contract {
        width: 6vw;
      }
    }
  }

  @media (min-width: 1080px) {
    .dashboard__template__container {
      display: flex;
      justify-content: space-between;
      .nav__width {
        transition: width 0.5s ease-in-out;
        width: 19vw;
      }
      .route__body{
        transition: width 0.5s ease-in-out;
        width: 81vw;
        margin-left: auto;
      }
      .expand {
        width: 95vw;
      }
      .contract {
        width: 5vw;
      }
    }
  }
`;

export default DashboardTemplateStyle;
