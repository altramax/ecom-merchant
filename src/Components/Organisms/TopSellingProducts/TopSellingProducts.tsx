import TopSellingProductsStyles from "./TopSellingProductsStyles";
import { useState } from "react";
import ProductDetails from "../ProductDetails/ProductDetails";
import { useAppSelector } from "../../../Redux/Hooks";

type topProductType = {
  image: string;
  title: string;
  price: number;
  description: string;
  category: string;
  id: number;
};

const TopSellingProducts = ({
  image,
  title,
  price,
  description,
  category,
  id,
}: topProductType) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const color = useAppSelector((state) => state.color);

  const handlerModal = (evt: boolean) => {
    setOpenModal(evt);
  };


  return (
    <TopSellingProductsStyles>
      <div className="topproduct__container" key={id} id={color.mode}>
        {openModal ? (
          <ProductDetails
            image={image}
            cancle={() => handlerModal(false)}
            description={description}
            category={category}
            title={title}
            price={price}
          />
        ) : (
          <div className="topproduct__bar" onClick={() => handlerModal(true)}>
            <div className="topproduct__info__group">
              <img src={image} alt="product Image" className="product__img" />
              <div>
                <p className="product__name">{title}</p>
                <p>{id}</p>
              </div>
            </div>
            <p>₦{price}</p>
          </div>
        )}
      </div>
    </TopSellingProductsStyles>
  );
};

export default TopSellingProducts;
