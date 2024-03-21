import styled from "styled-components";

const AvatarStyle = styled.div`

  .avatar__img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    // display: block;
  }

  .avatar__username {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #fff;
    text-transform: capitalize;
    border-radius: 50%;
    background-color: red;
    padding: 5px;
    width: 25px;
    height: 25px;
  }

  @media (min-width: 1080px){
    .avatar__img{
        width: 40px;
        height: 40px;
    }

    .avatar__username{
        width: 50px;
        height: 50px;
    }
  }
`;
export default AvatarStyle;
