import WearHouseTableStyle from "./WearHouseTableStyle";
// import { useState } from "react";
import { useAppSelector } from "../../../Redux/Hooks";
import EmptyState from "../../Molecule/EmptyState/EmptyState";
import { useNavigate } from "react-router-dom";

const WearHouseTable = () => {
  // const [openModal, setOpenModal] = useState<boolean>(false);
  const products = useAppSelector((state) => state.allProducts.products);
  const color = useAppSelector((state) => state.color);
  // const [selectedItem, setSelectedItem] = useState<any>();
  const navigate = useNavigate()

  const navigateToProductDetails = () => {
   navigate("/wearhouse/details")
  };

  return (
    <WearHouseTableStyle>
      <>
        <div className="WearHouseTable__bar__container" id={color.mode}>
          <table>
            <thead>
              <tr>
                <th>Items</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Date Added</th>
              </tr>
            </thead>
            {products !== null && (
              <tbody>
                {products.map((item: any) => {
                  return (
                    <tr
                      key={item.id}
                      onClick={() => {
                        // setSelectedItem(item);
                        navigateToProductDetails()
                      }}
                    >
                      <td>Shoe</td>
                      <td>5</td>
                      <td>#3,000</td>
                      <td> 4/9/24</td>
                    </tr>
                  );
                })}
              </tbody>
            )}
          </table>

          {products === null && (
            <div>
              <EmptyState
                header="No Product Found"
                text="Click add Products to start"
              />
            </div>
          )}
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
    </WearHouseTableStyle>
  );
};

export default WearHouseTable;
