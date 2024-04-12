import ProductDetailsStyle from "./ProductDetailsStyle";
import arrow_dark from "../../../assets/Icons/arrowDownLongDark.svg";
import arrow_light from "../../../assets/Icons/arrowDownLongLight.svg";
import { useAppSelector } from "../../../Redux/Hooks";

type propsType = {
  title: string;
  image: string;
  cancle: any;
  description: string;
  category: string;
  price: number;
};

const ProductDetails = ({
  image,
  cancle,
  description,
  category,
  title,
  price,
}: propsType): JSX.Element => {
  const color = useAppSelector((state) => state.color);

  return (
    <ProductDetailsStyle>
      <div className="overlayModal" onClick={cancle}></div>
      <div className="modal__container" id={color.mode}>
        <div className="cancleIcon" onClick={cancle}>
          {color.mode === "dark" ? (
            <img src={arrow_light} alt="" className="cancleIcon__img" />
          ) : (
            <img src={arrow_dark} alt="" className="cancleIcon__img" />
          )}
        </div>

        <div className="modalFlex">
          <div className="modalImageGroup">
            <div className="modalImage">
              <img src={image} alt="" />
            </div>
            <h3>{title}</h3>
          </div>
          <div className="descriptionGroup">
            <h3>
              Total units sold : <span>14</span>
            </h3>
            <h3>
              Price : <span> ₦{price}</span>
            </h3>
            <h3>
              Item No. <span> 128hbdh3479cnk </span>
            </h3>

            <h3>
              Category :{" "}
              <span>{category.at(0)?.toUpperCase() + category.slice(1)} </span>
            </h3>
            <h3>
              Description : <span> {description}</span>
            </h3>
          </div>
        </div>
      </div>
    </ProductDetailsStyle>
  );
};
export default ProductDetails;
