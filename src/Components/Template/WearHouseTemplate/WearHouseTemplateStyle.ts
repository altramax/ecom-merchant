import styled from "styled-components";
import headerImg from "../../../assets/Images/header (2).jpg";

const WearHouseTemplateStyle = styled.div`
  .wearhouse__container {
    padding: 40px 0 0 0;
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // align-items: center;
    height: 100vh;
  }
  .wearhouse__header {
    // width: 90%;
    // position: fixed;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 20px;
    gap: 10px;

    background-image: url("${headerImg}");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: top;
  }
  .wearhouse__header {
    .dashboard__header__boxes {
      display: flex;
      justify-content: start;
      gap: 20px;
    }
    border-radius: 10px;
  }

  .filter__addProducts__container {
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

  .add__products__button {
    padding: 8px 15px;
    font-weight: 500;
    border: none;
    border-radius: 3px;
  }

  .wearhouse__container__main::-webkit-scrollbar {
    display: none;
  }
  .wearhouse__container__main {


    -ms-overflow-style: none;
    scrollbar-width: none;

    margin-top: 30px;
    height: 75vh;


    overflow: auto;
  }

  @media (min-width: 768px) {
    .wearhouse__container {
      width: 95%;
      padding: 40px 0 0 0;
    }
    .filter__addProducts__container {
      .search__container {
        input {
          width: 400px;
        }
      }
    }
    .wearhouse__container__main {
      // padding: 40px 0 20px 0;
      // width: 90%;
    }
  }
`;

export default WearHouseTemplateStyle;
