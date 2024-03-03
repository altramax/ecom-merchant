import styled from "styled-components";


const sliderStyle = styled.div`
.slider__container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .img__container{
        height: 450px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img{
        width: 350px;
        max-height: 650px;
    }
}

.slider__text{
    margin-top: 30px;
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
        .img__container{
            height: 400px;
        }
        img{
            width: 450px;
            max-height: 450px;
        }
    }
}

`;

export default sliderStyle;