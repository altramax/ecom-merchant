import styled from "styled-components";

import { LightModeColor, DarkModeColor } from "../../Atom/Colors/Colors";

const DashboardTemplateStyle = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;

  #light {
    // .nav__width {
    //   background-color: ${LightModeColor.primary};
    // }

    .bot {
      transition: 0.7s ease-in;
      background-color: blue;
    }
  }

  #dark {
    // .nav__width {
    //   background-color: ${DarkModeColor.primary};
    // }
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
    .route__body {
      width: 100%;
      padding-left: 10%;
    }
  }

  @media (min-width: 1080px) {
    .dashboard__template__container {
      display: flex;
      justify-content: start;
      .nav__width {
        transition: width 0.5s ease-in-out;
        width: 25vw;
      }
      .route__body {
        transition: width 0.5s ease-in-out;
        width: 75vw;
        padding-left: 2%;
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
