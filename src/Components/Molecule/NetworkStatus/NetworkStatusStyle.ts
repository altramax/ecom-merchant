import styled from "styled-components";

const NetworkErrorStyle = styled.div`
.network__error__container{
  
}



.online{
    position: absolute;
    top: 0;
    right: 0;
    
    margin: 24px 24px 0 0;
    color: blue;
    padding : 10px 20px;
    border: 1px solid black;
    animation: dropdown 0.5s ease;
    transform-origin: right center;
}

.offline{
    position: absolute;
    top: 0;
    right: 0;
    
    margin: 24px 24px 0 0;
    color: red;
    padding : 10px 20px;
    border: 1px solid red;
    animation: dropdown 0.5s ease;
    transform-origin: right center;
}

@keyframes dropdown{
    0%{
        transform: scaleX(0)
    }
    80%{
        transform: scaleX(1.2)
    }
    100%{
        transform: scaleX(1)
    }
}



`;

export default NetworkErrorStyle;