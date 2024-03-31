import styled from "styled-components";

const InformationBoxStyle = styled.div`
width: 100%;

.box__container{
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: 1px solid;
    border-radius: 10px;
    img{
        width: 40px;
        margin-bottom: 10px;
    }
    .box__container__textgroup{
        p{
            margin-bottom: 5px;
        }
    }
}

@media (min-width: 768px){
    .box__container{
        flex-direction: row;
        width: 100%;
    gap: 30px;

  img{
    margin-bottom: 0;
  }
    }
}

@media (min-width: 1280px){
.box__container{
    gap: 30px;
}
}


`;

export default InformationBoxStyle;