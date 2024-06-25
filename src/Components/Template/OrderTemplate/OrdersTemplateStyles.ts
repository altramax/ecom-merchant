import styled from "styled-components";

const OrdersTemplateStyles = styled.div`

.orders__container{
    padding: 40px 0 0 0;
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // align-items: center;
    height: 100vh;
}
.heading{
    margin-bottom: 20px;
  }

.filter__orders__container {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .search__filter__group {
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 15px;
    }
    .search__container {
      input {
        // width: 250px;
        padding: 10px;
        border: none;
        border-radius: 8px;
      }
      img {
        position: absolute;
        width: 20px;
        margin: 8px 0 0 -30px;
      }
    }
    .filter__container {
      padding: 8px 15px;
      font-weight: 500;
      border: none;
      border-radius: 3px;
    }
  }

  .download__button {
    cursor: pointer;
    padding: 8px 15px;
    font-weight: 500;
    border: none;
    border-radius: 3px;
  }


  .orders__container__table::-webkit-scrollbar {
    display: none;
  }
  .orders__container__table{


    -ms-overflow-style: none;
    scrollbar-width: none;

    margin-top: 30px;
    height: 75vh;


    overflow: auto;
  }


  @media (min-width: 768px) {
    .orders__container{
      width: 95%;
      padding: 40px 0 0 0;
    }
    .filter__orders__container {
      .search__container {
        input {
          width: 400px;
        }
      }
    }

  }
`;

export default OrdersTemplateStyles;