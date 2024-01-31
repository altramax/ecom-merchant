import styled from "styled-components";


const sliderStyle = styled.div`
.slider__container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        width: 400px;
    }
}

.slider__text{
    text-align: center;
    width: 70%;
    h3{
    margin: 0 0 20px 0;
    }
}   

.hidden{
    display: none;
}

@media (min-width: 1028px){
    .slider__container{
        img{
            width: 600px;
        }
    }
}

`;

export default sliderStyle;