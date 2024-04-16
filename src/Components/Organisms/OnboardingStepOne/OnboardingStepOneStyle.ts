import styled from "styled-components";
import { LightModeColor, DarkModeColor } from "../../Atom/Colors/Colors";

const OnboardingStepOnestyle = styled.div`

#light {
    background-color: ${LightModeColor.background};
  .step__one__container{
    box-shadow: 1px 1px 20px ${LightModeColor.secondary};
   }

.image__upload__groups{
    background-color: ${LightModeColor.primary};
    span{
        color:${LightModeColor.primaryVariant};
    }
    small{
        color:${LightModeColor.error}; 
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
   
        .image__upload__groups{
            color: ${DarkModeColor.background};
            background-color: ${DarkModeColor.primary};
            span{
                color:${DarkModeColor.primaryVariant};
            }
            small{
                color:${DarkModeColor.error}; 
            }
        }
    
       .buttons__group{
        button{
            background-color: ${DarkModeColor.primary}
        }
       }  
  }

  .step__one__container::-webkit-scrollbar{
    display: none;
}

.step__one__container{
   width: 80vw;
   height: 600px;
   padding: 40px 20px;
   border-radius: 10px;
   position: relative;
   overflow: auto;
   .step__one__heading{
       text-align: center;
   h1{
       font-size: 23px;
       margin-bottom: 10px;
   }
   p{
       margin:0 auto 20px auto;
       font-size: 12px;
   }
   }
   .hidden{
    display: none;
   }

   .input__groups{
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
   }


   .input__group{
      margin: 20px 0;
       small{
           position: absolute;
           display: block;
           color: #ff0000;
           padding: 5px;
           font-weight: 500;
       }
       input{
        width: 250px;
        padding: 10px;
        border: none;
        border-bottom: 1px solid; 
        font-size: 13px;
       }
   }

   .image__upload__groups{
    padding: 10px 20px 20px 20px;
    margin: 30px auto 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius : 10px;
    small{
        position: absolute;
        display: block;
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
       
       h3{
        font-size: 15px;
        text-decoration: underline;
       }
       p{
        font-size: 11px;
       }
       }
       .uploaded__image{
        height: 50px;
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
    margin: 40px 0 0 0;
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 20px;
    .button{
        width: fit-content;
        padding: 5px 20px;
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
    height: fit-content;
   width: 600px;
   padding: 30px;
   
   .step__one__heading{ 
   h1{
       font-size: 30px;
   }
   p{
       width: 60%;
       margin-bottom: 0;
   }
}

   .input__groups{
    flex-direction: row;
    gap: 30px;
   }

   .image__upload__groups{
    

   }
   .buttons__group{
    margin-top: 20px;
   }
}

@media (min-width: 1280px){
   .step__one__container{
    width: 600px;
       
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

       }
       .image__upload__groups{
  
        padding: 10px 20px 20px 20px;
      
       }
      
}
`;

export default OnboardingStepOnestyle;
