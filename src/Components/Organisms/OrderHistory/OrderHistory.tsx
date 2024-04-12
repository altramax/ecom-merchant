import OrderHistoryStyle from "./OrderHistoryStyles";
import checked from "../../../assets/Icons/checked.svg"

const OrderHistory = () => {
  return (
    <OrderHistoryStyle>
      <div className="order__history__container">
        <div className="order__history__group">
          <div className="order__history__indicators">
            <div className="order__history__indicator__dot"><img src={checked} alt="" /></div>
            <div className="order__history__indicator__line"></div>
          </div>
          <div className="order__history__step">
            <h4>Product Ordered</h4>
            <p>2/13/2024</p>
          </div>
        </div>
        <div className="order__history__group">
          <div className="order__history__indicators">
            <div className="order__history__indicator__dot"><img src={checked} alt="" /></div>
            <div className="order__history__indicator__line"></div>
          </div>
          <div className="order__history__step">
            <h4>Order Confirmed</h4>
            <p>2/13/2024</p>
          </div>
        </div>
        <div className="order__history__group">
          <div className="order__history__indicators">
            <div className="order__history__indicator__dot"><img src={checked} alt="" /></div>
            <div className="order__history__indicator__line"></div>
          </div>
          <div className="order__history__step">
            <h4>Order Processing</h4>
            <p>2/13/2024</p>
          </div>
        </div>
        <div className="order__history__group">
          <div className="order__history__indicators">
            <div className="order__history__indicator__dot"><img src={checked} alt="" /></div>
            <div className="order__history__indicator__line"></div>
          </div>
          <div className="order__history__step">
            <h4>Product Enroute</h4>
            <p>2/13/2024</p>
          </div>
        </div>
        <div className="order__history__group">
          <div className="order__history__indicators">
            <div className="order__history__indicator__dot"><img src={checked} alt="" /></div>
          </div>
          <div className="order__history__step">
            <h4>Product Delivered</h4>
            <p>2/13/2024</p>
          </div>
        </div>
      </div>
    </OrderHistoryStyle>
  );
};

export default OrderHistory;
