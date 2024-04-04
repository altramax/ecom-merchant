import styled from "styled-components";

const SalesReportStyles = styled.div`
  .topproduct__container {
    .topproduct__bar {
      cursor: pointer;
      border: 1px solid;
      border-radius: 5px;
      padding: 5px 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 5px;
      .topproduct__info__group {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 7px;
      }
      .product__img {
        width: 40px;
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
          margin-left: auto;
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
export default SalesReportStyles;
