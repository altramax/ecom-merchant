import styled from "styled-components";
import night__sky from "../../../assets/Images/night__sky.jpg";
import day__sky from "../../../assets/Images/day__sky.jpg";
import { lightMode,darkMode } from "../../Molecule/Colors/Colors";

const DashboardStyle = styled.div`


#light .bot{
 transition: 0.7s ease-in;
    background-color:blue;

 }
 
 #dark .bot{
  transition: 0.7s ease-in;
 
    background-color:red;
   
  }
 
 
 .bot{
   width: 300px;
   height: 100px;
   margin: 50px;

 }
 


  .theme__button {
    margin: 30px;
    display: flex;
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
    // transition: opacity 1s ease-in;
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
    background-color: red;
    background-image: url(${night__sky});
    background-size: 100%;
    .sun {
      
      opacity: 0;
    }
  }
`;

export default DashboardStyle;
