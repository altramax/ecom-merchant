import SalesReportStyle from "./SalesReportStyle";
import { useState } from "react";
import { useAppSelector } from "../../../Redux/Hooks";
import SalesDetails from "../SalesDetails/SalesDetails";

const SalesReport = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const products = useAppSelector((state) => state.allProducts);
  const color = useAppSelector((state) => state.color);
  const [selectedItem, setSelectedItem] = useState<any>();

  const showModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const renderSalesModal = () => {
    if (openModal) {
      return <SalesDetails {...selectedItem} cancle={closeModal}/>;
    }
  };

  return (
    <SalesReportStyle>
      <>
        {renderSalesModal()}
        <div className="salesreport__bar__container" id={color.mode}>
          <table>
            <thead>
              <tr>
                <th className="start">Order No.</th>
                {/* <th>Date</th> */}
                <th>No. of Items</th>
                <th>Total Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {products.products !== null &&
                products.products.map((item: any) => {
                  return (
                    <tr
                      key={item.id}
                      onClick={() => {
                        setSelectedItem(item);
                        showModal();
                      }}
                    >
                      <td className="start">1jdkdn21234jj</td>
                      {/* <td>6/12/24</td> */}
                      <td>5</td>
                      <td>{item.price}</td>
                      <td>
                        <div className="pending">Pending</div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </>

      {/* <div className="topproduct__container" key={id}>
        {openModal ? (
          <ProductDetails
            image={image}
            cancle={() => handlerModal(false)}
            price={price}
            name={name}
            description={description}
            rating={rating}
            category={category}
          />
        ) : (
          <div className="topproduct__bar" onClick={() => handlerModal(true)}>
            <div className="topproduct__info__group">
              <img src={image} alt="product Image" className="product__img" />
              <div>
                <h4>{name}</h4>
                <p>{id}</p>
              </div>
            </div>
            <p>₦{price}</p>
          </div>
        )}
      </div> */}
    </SalesReportStyle>
  );
};

export default SalesReport;
