import styled from "styled-components";
import { LightModeColor, DarkModeColor } from "../../Atom/Colors/Colors";import { lightmode } from "../../../Redux/ColorSlice";


const OnboardingStepOnestyle = styled.div`

#light {
  .step__one__container{
    background-color: ${LightModeColor.grey}
   }
  }

  #dark {
  }


.step__one__container{
   height: 80vh;
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

   .input__groups{
       margin-top: 20px;
       width: 100%;
       display: flex;
       gap: 20px;
       justify-content: center;
       align-items: center;
       flex-wrap: wrap;
       align-item: center;
   }
   .input__group{
       title{
           display: block;
           margin-bottom: 5px;
       }
       input{
        width: 300px;
        padding: 10px; 
       }
   }
}

@media (min-width: 768px){
   
.step__one__container{
   width: 80vw;
   

   .step__one__heading{
   
   h1{
       font-size: 40px;
   }
   p{
       width: 60%;
   }
   }
}

@media (min-width: 1080px){
   .step__one__container{

       
   
       .step__one__heading{
     
       p{
           width: 40%;
       }
       }
}
`;

export default OnboardingStepOnestyle;