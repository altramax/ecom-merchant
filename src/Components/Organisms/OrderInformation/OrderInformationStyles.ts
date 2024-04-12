import styled from "styled-components";

const OrderInformationStyle = styled.div`
  .order__information__container {
    padding: 30px 10px;
  }

  .order__information__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header__titles {
      border-radius: 20px;
      width: fit-content;
      padding: 10px;
      font-size: 11px;
      background-color: blue;
      cursor: pointer;
    }
}
.order__information__body {
  margin: 20px;
}
`;
export default OrderInformationStyle;
