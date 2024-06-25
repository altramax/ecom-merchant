import OrdersTemplateStyles from "./OrdersTemplateStyles";
import searchIcon from "../../../assets/Icons/search.svg";
import Button from "../../Molecule/Button/Button";
import OrdersTable from "../../Organisms/OrdersTable/OrdersTable";

const OrdersTemplate = () => {
  return (
    <OrdersTemplateStyles>
      <div className="orders__container">
        <div>
          <h2 className="heading">Orders</h2>
          <div className="filter__orders__container">
            <div className="search__filter__group">
              <div className="search__container">
                <input type="text" />
                <img src={searchIcon} alt="" />
              </div>
              {/* <Button
              type="button"
              value="Filter"
              Click={() => {}}
              className="filter__container"
            /> */}
            </div>
            <Button
              Click={() => {}}
              value="Download"
              type="button"
              className="download__button"
            />
          </div>
        </div>
        <div className="orders__container__table">

        <OrdersTable/>
        </div>
      </div>
    </OrdersTemplateStyles>
  );
};

export default OrdersTemplate;
