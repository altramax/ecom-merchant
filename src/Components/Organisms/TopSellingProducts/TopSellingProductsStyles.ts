import styled from "styled-components";
import { DarkModeColor} from "../../Atom/Colors/Colors";

const TopSellingProductsStyles = styled.div`

#dark{
  .topproduct__bar{
    border-color: ${DarkModeColor.secondary};
    color: ${DarkModeColor.secondary};
  }
}
  .topproduct__container {
    .topproduct__bar {
      cursor: pointer;
      border-top: 1px solid;
      padding: 5px 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 5px;
      margin: 5px 0;
      .topproduct__info__group {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 7px;
      }
      .product__img {
        width: 40px;
      }
      .product__name{
        font-size: 12px;
      }
      p {
        font-size: 10px;
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
export default TopSellingProductsStyles;
