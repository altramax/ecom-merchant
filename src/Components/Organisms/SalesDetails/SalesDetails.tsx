import SalesDetailsStyle from "./SalesDetailsStyle";
import download from "../../../assets/Icons/download-icon.png";
import { useAppSelector } from "../../../Redux/Hooks";
import closeDark from "../../../assets/Icons/cancle-dark.svg";
import closeWhite from "../../../assets/Icons/cancle-white.svg";

import TopSellingProducts from "../TopSellingProducts/TopSellingProducts";
import OrderInformation from "../OrderInformation/OrderInformation";

type propsType = {
  title: string;
  image: string;
  cancle: any;
  description: string;
  category: string;
  price: number;
};

const SalesDetails = (details: propsType): JSX.Element => {
  const color = useAppSelector((state) => state.color);
  const products = useAppSelector((state) => state.products);


  return (
    <SalesDetailsStyle>
      <div className="sales__details__container" id={color.mode}>
        <div className="sales__details__container__sub">
          <div className="sales__details__list">
            <div className="sales__details__header">
              <div>
                <h3>
                  Order: Odr34df <span>Pending</span>
                </h3>
                <p>
                  Order date: <span>Mon, 3rd May 2023</span>
                </p>
                <p>
                  Estimated Delivery Date: <span>Fri, 7th May 2023</span>
                </p>
              </div>
              <div onClick={details.cancle}>
                {color.mode === "dark" ? (
                  <img src={closeWhite} alt="close" className="close" />
                ) : (
                  <img src={closeDark} alt="close" className="close" />
                )}
              </div>
              <div className="download__group">
                <img src={download} alt="" className="download" />
                <span>Export as CSV</span>
              </div>
            </div>
            <div className="sales__details__items">
              {products.products !== null &&
                products.products.map((item: any) => {
             
                  return (
                    <div >
                      <TopSellingProducts {...details} id={item.id} />
                    </div>
                  );
             
                })}
            </div>
          </div>
          <div className="sales__line"></div>
          <div className="sales__details__order">
          <OrderInformation />

          </div>
        </div>
      </div>
    </SalesDetailsStyle>
  );
};
export default SalesDetails;
