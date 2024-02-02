import styled from "styled-components";
import night__sky from "../../../assets/Images/night__sky.jpg";
import day__sky from "../../../assets/Images/day__sky.jpg";
import { LightModeColor, DarkModeColor } from "../../Molecule/Colors/Colors";

const DashboardTemplateStyle = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;


  #light .bot {
    transition: 0.7s ease-in;
    background-color: blue;
  }

  #dark .bot {
    transition: 0.7s ease-in;

    background-color: red;
  }

  .bot {
    width: 300px;
    height: 100px;
    margin: 50px;
  }

  .theme__button {
    position: absolute;
    top: 30px;
    display: none;
    justify-content: space-between;
    align-items: center;
    width: 70px;
    transition: background-image 1s ease-in;
    border-radius: 100px;

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


  .dashboard__template__container{
    display: flex;
    justify-content: space-between;
    .nav__width{
     width: 15%;
    }
    .route__body{
      width: 85%;
    }
  }

`;

export default DashboardTemplateStyle;
