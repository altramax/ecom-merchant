import styled from "styled-components";

const OnboardingSliderStyle = styled.div`
.blur{
  .left__cover, .right__cover{
  position: absolute;
  opacity: 0.2;
  }
}



.slider__group{
    display: none;
 }

.visible{
    display: flex;
}


.slider__group__container{
 display: flex;
 justify-content: center;
 align-items: center;

}

.slider__container{
    img{
        width: 300px;
    }
}

.direction{
    width: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left__cover, .right__cover{
        background-color: #808080;
        border-radius: 2px;
        width: 30px;
        height: 20px;
        z-index: 2;
        display: block;
    }
    img{
        width: 100%;
        z-index: 1;
        display: block;
    }
}

@media (min-width: 1028px){
 .skip{
    display: none;
 }
}

`;
export default OnboardingSliderStyle;