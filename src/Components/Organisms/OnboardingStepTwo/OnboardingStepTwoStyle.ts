import styled from "styled-components";
import { LightModeColor, DarkModeColor } from "../../Atom/Colors/Colors";

const OnboardingStepTwostyle = styled.div`

#light {
    .step__one__container{
      box-shadow: 1px 1px 20px ${LightModeColor.secondary};
     }
  //    .step__one__heading{
  //     color: ${LightModeColor.secondary}
  //    }
  .image__upload__groups{
      background-color: ${LightModeColor.primary};
      span{
          color:${LightModeColor.primaryVariant};
      }
     }
  
     .buttons__group{
      button{
          background-color: ${LightModeColor.primary}
      }
     }
  
  
    }
  
    #dark {
      background-color: ${DarkModeColor.background};
      color: ${DarkModeColor.secondary};
          .step__one__container{
          background-color: ${DarkModeColor.backgroundVariant2};
          // box-shadow: 1px 1px 20px ${DarkModeColor.backgroundVariant};
          input{
              background-color: ${DarkModeColor.backgroundVariant};
              color:  ${DarkModeColor.secondary};
          }
         }
      //    .step__one__heading{
      //     color: ${DarkModeColor.secondary}
      //    }
          .image__upload__groups{
              color: ${DarkModeColor.background};
              background-color: ${DarkModeColor.primary};
              span{
                  color:${DarkModeColor.primaryVariant};
              }
          }
      
         .buttons__group{
          button{
              background-color: ${DarkModeColor.primary}
          }
         }  
    }
  
  
  
  .step__form{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  }
  
  .step__one__container{
     width: 90vw;
  //    margin-top: 50px;
     padding: 10px;
     border-radius: 10px;
     .step__one__heading{
         text-align: center;
     h1{
         font-size: 30px;
     }
     p{
         width: 80%;
         margin: auto;
     }
     }
     .hidden{
      display: none;
     }
  
     .input__groups{
      //    margin: 20px auto 0 auto;
         width: 100%;
         display: flex;
      //    gap: 20px;
         justify-content: center;
         align-items: center;
         flex-wrap: wrap;
         align-items: center;
       
     }
  
  
     .input__group{
        margin-top: 20px;
         small{
             position: absolute;
             display: block;
             color: #ff0000;
             padding: 5px;
             font-weight: 500;
         }
         input{
          width: 300px;
          padding: 10px;
          border: none;
          border-bottom: 1px solid; 
         }
     }
  
     .image__upload__groups{
      margin: 40px auto 0 auto;
      width: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius : 10px;
      small{
          position: absolute;
          display: block;
          color: #ff0000;
          padding: 5px;
          font-weight: 500;
          left: auto;
          right: auto;
          left: 0;
          right: 0;
          text-align: center;
      }
          
      .upload__text{
          text-align: center;
          line-height: 140%;
          width: 100%;
          padding: 5px;
         h3{
          text-decoration: underline;
         }
         }
         .uploaded__image{
          height: 90px;
          .image__delete{
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 20px;
              cursor : pointer;
          }
          img{
              width: 30px;
              height: 30px;
          }
         }
         span{
          cursor: pointer;
         }
     }
     .buttons__group{
      margin-top: 40px;
      display: flex;
      width: 100%;
      justify-content: center;
      gap: 80px;
      .button{
          width: fit-content;
          width: 150px;
          height: 40px;
          border: none;
          border-radius: 4px;
          font-weight: 500;
          cursor : pointer;
      }
     }
  }
  
  @media (min-width: 768px){
     
  .step__one__container{
     width: 90vw;
     padding: 30px;
     
  
     .step__one__heading{
     
     h1{
         font-size: 40px;
     }
     p{
         width: 60%;
     }
     }
  
     .input__groups{
      gap: 40px;
     }
  
     .image__upload__groups{
      width: 610px;
     }
  }
  
  @media (min-width: 1080px){
     .step__one__container{
      width: 60vw;
         
     
         .step__one__heading{
       
         p{
             width: 60%;
         }
         }
         .input__group{
             margin-top: 20px;
          }
          .input__groups{
             gap: 50px;
             margin-top: 20px;
  
         }
         .image__upload__groups{
          width: 670px;
         }
  }
`;

export default OnboardingStepTwostyle;
