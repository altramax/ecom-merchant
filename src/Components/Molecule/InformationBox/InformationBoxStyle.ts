import styled from "styled-components";
import { DarkModeColor, LightModeColor } from "../../Atom/Colors/Colors";

const InformationBoxStyle = styled.div`
  width: 100%;

  .box__container {
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: none;
    border-radius: 10px;

    // .img__container{
    //  display: flex;
    //  justify-content: center;
    //  align-items: center;
    //  width: 50px;
    // }
    img {
      width: 40px;
      margin-bottom: 10px;
    }
    .box__container__textgroup {
      p {
        font-size: 12px;
        margin-bottom: 5px;
      }
      h3{
        font-size: 16px;
      }
    }
  }

  #dark {
    background-color: ${DarkModeColor.backgroundVariant}
    
  }

  #light {
    background-color: ${LightModeColor.background}
    
  }

  @media (min-width: 768px) {
    .box__container {
      flex-direction: row;
      width: 100%;
      gap: 30px;
      border: none;
      img {
        margin-bottom: 0;
      }
    }
  }

  @media (min-width: 1280px) {
    .box__container {
      gap: 30px;
    }
  }
`;

export default InformationBoxStyle;
