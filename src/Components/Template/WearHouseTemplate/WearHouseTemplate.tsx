import WearHouseTemplateStyle from "./WearHouseTemplateStyle";
// import ProductsTable from "../ProductsTable/ProductsTable";
import InformationBox from "../../Molecule/InformationBox/InformationBox";
import revenue from "../../../assets/Icons/revenue icon.png";
import orders from "../../../assets/Icons/orders.png";
import customer from "../../../assets/Icons/customer.png";
import searchIcon from "../../../assets/Icons/search.svg";
import WearHouseTable from "../../Organisms/WearHouseTable/WearHouseTable";
import Button from "../../Molecule/Button/Button";

const ProductsTemplate = () => {
  return (
    <WearHouseTemplateStyle>
      {/* <ProductsTable/> */}
      <div className="wearhouse__container">
        <div>
          <div className="wearhouse__header">
            <div className="dashboard__header__boxes">
              <div className="box__sub__container">
                <InformationBox
                  icon={revenue}
                  headText="Total Items"
                  text="300"
                />
              </div>
              <div className="box__sub__container">
                <InformationBox
                  icon={orders}
                  headText="Available Stock"
                  text=" 30"
                />
              </div>
              <div className="box__sub__container">
                <InformationBox
                  icon={customer}
                  headText="Out Of Stock"
                  text="10 "
                />
              </div>
            </div>
            {/* <div className="header__img__container">
            <img src={headerImg} alt="header Image" />
          </div> */}
          </div>
          <div className="filter__addProducts__container">
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
              value="Add Products"
              type="button"
              className="add__products__button"
            />
          </div>
        </div>
        <div className="wearhouse__container__main">
          <WearHouseTable />
        </div>
      </div>
    </WearHouseTemplateStyle>
  );
};

export default ProductsTemplate;
