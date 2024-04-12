import styled from "styled-components";

const OrderHistoryStyle = styled.div`
  .order__history__container {
    
  }

  .order__history__group {
    display: flex;
    justify-content: start;
    align-items: start;
    gap: 10px;
    margin-bottom: 5px;
    .order__history__indicators{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        gap: 5px;
    }
    .order__history__indicator__dot {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color:red;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 8px;
        }  
    }
    .order__history__indicator__line{
        width: 2px;
        height: 50px;
        background-color:red;   
    }
    .order__history__step{
        h4{
            font-size: 12px;
            margin-bottom: 7px;
        }
        p{
            font-size: 12px; 
        }
    }
  }
`;
export default OrderHistoryStyle;
