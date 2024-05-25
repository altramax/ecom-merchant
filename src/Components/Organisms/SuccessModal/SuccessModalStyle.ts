import styled from "styled-components";

const SuccessModalStyle = styled.div`
  .successs-modal-overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    overflow: none;
    height: 100%;
    width: 100%;
    z-index: 1900;

    .success-modal-content {
      width: 491px;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
      border-radius: 8px;
      background: white;
      padding: 73px 20px 71px 20px;
      text-align: center;
      position: relative;
      img {
        height: 74px
        margin-bottom: 24px;
        width: 74px;
      }
    }

    .success-modal-title {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 150%;
      text-align: center;
      letter-spacing: -0.01em;
      margin-bottom: 8px;
      color: #1e0a3c;
    }

    .success-modal-text {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;
      text-align: center;
      color: #546680;
    }
  }
`;

export default SuccessModalStyle;
