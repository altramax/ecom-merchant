import styled from "styled-components";

const VerifyEmailModalStyle = styled.div`
  .verify__mail__container {
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #808080;
    color: #fff;


}

.verify__mail__images{
  img{
    width: 200px;
    height: 200px;
  }
}

  @media (min-width: 1080px){
    .verify__mail__images{
        img{
          width: 300px;
          height: 300px;
        }
      }
  }
`;
export default VerifyEmailModalStyle;
