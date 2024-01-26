import styled from "styled-components";

const OnboardingTemplateStyle = styled.div`
.skip, .previous{
    position: absolute;
    top: 40px;
    left: 40%;
    z-index: 10;
}
.onboarding__container{
    display: flex;
    .slider{
        width: 100%;
    }
    .login{
       width: 100%;
    }
}

.shown{
  display: block;
}
.hidden{
    display: none;
}



@media (min-width: 1028px){
    .skip, .previous{
        display: none;
    }


    .shown{
        display: block;
      }
      .hidden{
          display: block;
      }

      
    .onboarding__container{
        display: flex;
        .slider{
            width: 50%;
        }
        .login{
           width: 50%;
           display: block;
        }
    }
}

`;
export default OnboardingTemplateStyle;