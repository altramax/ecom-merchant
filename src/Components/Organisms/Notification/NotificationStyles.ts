import styled from "styled-components";

const NotificationStyle = styled.div`
  .notification__container {
    .notification__bar {
      cursor: pointer;
      border: 1px solid;
      border-radius: 5px;
      padding: 5px 10px;
      display: flex;
      justify-content: start;
      align-items: start;
      gap: 5px;
      .red__dot {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: red;
        margin-top: 7px;
      }
      p {
        font-size: 13px;
      }
    }

    .notification__modal {
      padding: 50px;
      background-color: #fff;
      position: absolute;
      left: 0;
      top: 0;
      width: 100vw;
      min-height: 100vh;
   
      .img__container {
        width: 100%;
        img {
          cursor: pointer;
          width: 30px;
          display: block;
          margin-left:auto;

        }
      }
      h4 {
        font-size: 40px;
        text-align: center;
        margin: auto;
        width: fit-content;
        // margin-bottom: 40px;
      }

      p {
        margin: auto;
        text-align: center;
        // width: 60%;
        font-size: 18px;
      }
    }
  }
`;
export default NotificationStyle;