import styled from "styled-components";

const DashboardTemplateStyle = styled.div`
  overflow: hidden;
  position: fixed;
  width: 100vw;
  height: 100vh;

  #light {
    .bot {
      transition: 0.7s ease-in;
      background-color: blue;
    }
  }

  #dark {
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
      width: 100vw;
      height: 100vh;
    }
    .expand {
      width: 90vw;
      margin-left: auto;
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
      .route__body {
        transition: width 0.5s ease-in-out;
        width: 80vw;
      }
      .expand {
        width: 94vw;
        margin-left: auto;
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
        width: 20vw;
      }
      .route__body {
        transition: width 0.5s ease-in-out;
        width: 80vw;
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
