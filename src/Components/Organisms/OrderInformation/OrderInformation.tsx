import { useState } from "react";
import OrderInformationStyle from "./OrderInformationStyles";
import OrderHistory from "../OrderHistory/OrderHistory";
import Courier from "../Courier/Courier";
import Receiver from "../Receiver/Receiver";
import { useAppSelector } from "../../../Redux/Hooks";


const OrderInformation = () => {
  const [view, setView] = useState<string>("order history");
  const color = useAppSelector(state=>state.color)

  const viewHandler = (evt: string) => {
    setView(evt);
  };
  return (
    <OrderInformationStyle>
      <div id={color.mode} className="order__information__container">
        <div className="order__information__header">
          <h4
            className="header__titles"
            onClick={() => viewHandler("order history")}
          >
            Order History
          </h4>
          <h4 className="header__titles" onClick={() => viewHandler("courier")}>
            Courier Details
          </h4>
          <h4
            className="header__titles"
            onClick={() => viewHandler("receiver")}
          >
            Receiver Details
          </h4>
        </div>
        <div className="order__information__body">
          {view === "order history" ? <OrderHistory /> : null}
          {view === "courier" ? <Courier /> : null}
          {view === "receiver" ? <Receiver /> : null}
        </div>
      </div>
    </OrderInformationStyle>
  );
};

export default OrderInformation;
