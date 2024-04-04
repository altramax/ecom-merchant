import SalesReportStyle from "./SalesReportStyle";
import { useState } from "react";

import ProductDetails from "../ProductDetails/ProductDetails";

type topProductType = {
  image: string;
  name: string;
  price: number;

  description: string;
  rating: any;
  category: string;
  id: number;
};

const SalesReport = ({
  image,
  name,
  price,
  description,
  rating,
  category,
  id,
}: topProductType) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handlerModal = (evt: boolean) => {
    setOpenModal(evt);
  };

  return (
    <SalesReportStyle>
      <div className="topproduct__container" key={id}>
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
      </div>
    </SalesReportStyle>
  );
};

export default SalesReport;
