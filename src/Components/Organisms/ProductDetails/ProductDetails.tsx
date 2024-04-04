import ProductDetailsStyle from "./ProductDetailsStyle";
// import AddToCart from "../AddToCart/AddToCart";
// import { GrLinkDown } from "react-icons/gr";
import arrow_down from "../../../assets/Icons/long-arrow-down.png"

type propsType = {
  image: string;
  name: string;
  price: number;
  cancle: any;
  description: string;
  rating: any;
  category: string;
};

const ProductDetails = ({
  image,
  name,
  price,
  cancle,
  description,
  rating,
  category,
}: propsType): JSX.Element => {
  return (
    <ProductDetailsStyle>
      <div className="overlayModal" onClick={cancle}></div>
      <div className="modal__container">
        <div className="cancleIcon" onClick={cancle}>
          <img src={arrow_down} alt="" className="cancleIcon__img"/>
        </div>
        {/* if discount added */}
        {/* {price > 100 ? (
          <p className="discount">-20%</p>
        ) : (
          <p className="discount">-10%</p>
        )} */}
        <div className="modalFlex">
          <div className="modalImageGroup">
            <div className="modalImage">
              <img src={image} alt="" />
            </div>
            <h3>{name}</h3>
            <div>{rating.rate}</div>
            <h3>${price}</h3>
          </div>
          <div className="descriptionGroup">
            <h2>Description</h2>
            <h3>
              {category.at(0)?.toUpperCase() + category.slice(1)}
            </h3>
            <p>{description}</p>
            {/* {props && (
              <AddToCart
                title={props.name}
                category={props.category}
                description={props.description}
                price={props.price}
                image={props.img}
                rating={props.rating}
                id={props.id}
              />
            )} */}
          </div>
        </div>
      </div>
    </ProductDetailsStyle>
  );
};
export default ProductDetails;
