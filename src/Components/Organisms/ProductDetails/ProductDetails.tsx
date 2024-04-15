import ProductDetailsStyle from "./ProductDetailsStyle";
import arrow_dark from "../../../assets/Icons/arrowDownLongDark.svg";
import arrow_light from "../../../assets/Icons/arrowDownLongLight.svg";
import { useAppSelector } from "../../../Redux/Hooks";
import image1 from "../../../assets/Images/men.jpg";
import image2 from "../../../assets/Images/women.jpg";
import image3 from "../../../assets/Images/market.jpg";
import { useState } from "react";

type propsType = {
  // title: string;
  // image: string;
  cancle: any;
  // description: string;
  // category: string;
  // price: number;
};

const ProductDetails = ({
  // image,
  cancle,
  // description,
  // category,
  // title,
  // price,
}: propsType): JSX.Element => {
  const color = useAppSelector((state) => state.color);
  const imgAry = [image1, image2, image3];
  const [currentImage, setCurrentImage] = useState<string>(imgAry[0]);
  // const products = useAppSelector((state) => state.allProducts.products);


  const handlerImage = (evt: string) => {
    setCurrentImage(evt);
  };
  // console.log(products);
  return (
    <ProductDetailsStyle>
      <div className="overlayModal" onClick={cancle}></div>
      <div className="products__details__modal__container" id={color.mode}>
        <div className="cancleIcon" onClick={cancle}>
          {color.mode === "dark" ? (
            <img src={arrow_light} alt="" className="cancleIcon__img" />
          ) : (
            <img src={arrow_dark} alt="" className="cancleIcon__img" />
          )}
        </div>
        <div className="products__details__modal">
          <div className="images__container">
            <div className="sub__images">
            
                <img
                  src={imgAry[0]}
                  alt=""
                  className="sub__image"
                  onClick={() => handlerImage(image1)}
                />
           
                <img
                  src={imgAry[1]}
                  alt=""
                  className="sub__image"
                  onClick={() => handlerImage(image2)}
                />
           
                <img
                  src={imgAry[2]}
                  alt=""
                  className="sub__image"
                  onClick={() => handlerImage(image3)}
                />
           
            </div>
            <div className="main__images">
              <img src={currentImage} alt="" />
            </div>
          </div>
          <div className="discription__container">
            <h3>Bags</h3>
            {/* <p className="product__name">Bags</p> */}
            {/* <p className="price"> #30,000</p> */}
            <h3>
              Total units sold : <span>14</span>
            </h3>
            <h3>
              Price : <span> ₦{"10,000"}</span>
            </h3>
            <h3>
              Item No. <span> 128hbdh3479cnk </span>
            </h3>
            <h3>Description</h3>
            <ul>
             <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, soluta!</li>
             <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, soluta!</li>
             <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, soluta!</li>

            </ul>
          </div>
        </div>
      </div>
    </ProductDetailsStyle>
  );
};
export default ProductDetails;

{
  /* <div className="cancleIcon" onClick={cancle}>
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
         </div>  */
}
