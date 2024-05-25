import ProductDetailsStyle from "./ProductDetailsModalStyle";
import arrow_dark from "../../../assets/Icons/arrowDownLongDark.svg";
import arrow_light from "../../../assets/Icons/arrowDownLongLight.svg";
import circle from "../../../assets/Icons/circle in circle.svg";
import { useAppSelector } from "../../../Redux/Hooks";
import { useEffect, useRef, useState } from "react";
import image1 from "../../../assets/Images/men.jpg";
import image2 from "../../../assets/Images/women.jpg";
import image3 from "../../../assets/Images/market.jpg";
// import { useState } from "react";

type propsType = {
  cancle: any;
  id: string;
};

const ProductDetailsModal = ({ cancle, id }: propsType): JSX.Element => {
  const color = useAppSelector((state) => state.color);
  // const imgAry = [image1, image2, image3];
  // const [currentImage, setCurrentImage] = useState<string>(imgAry[0]);
  // const [selectedImage, setSelectedImage] = useState<any>("");
  const [currentImage, setCurrentImage] = useState<string>();
  // const imagesArray = useAppSelector((state) => state.imageUpload.images);
  // const imagesLoading = useAppSelector((state) => state.imageUpload.loading);
  // const pickImage = useRef<any>();
  const products = useAppSelector((state) => state.products.products);

  const [product, setProduct] = useState<any>();

  useEffect(() => {
    const entry = products?.map((items: any) => {
      return items.items;
    });
    entry?.map((items: any) => {
      return (
        items.length > 0 &&
        items.map((item: any) => {
          if (item.id === id) {
            setProduct(item);
            setCurrentImage(
              item.images.find((image: any) => image.url !== "")?.url
            );
          }
        })
      );
    });
  }, []);

  const priceAndDiscount = () => {
    const price = Number(product?.price);
    const discount = Number(product?.discount);
    const percentDis = (discount * 100) / price;
    const newPrice = price - discount;

    return (
      <div className="flex">
        <h5>₦{Number(product?.price).toLocaleString()}</h5>
        <h2>₦{newPrice.toLocaleString()}</h2>
        <small className="dis">{percentDis}% dis</small>
      </div>
    );
  };

  const formateDate = (evt: any) => {
    const options: object = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(evt);
    return date.toLocaleString("en-US", options);
  };

  console.log(product?.gender);
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
            <div className="sub__images__container">
              {product?.images?.map((img: any, i: string) => {
                if(img.url !== ""){

                  return (
                    <div className={`sub__image `} key={i}>
                      <img
                        src={img.url}
                        // alt="product Image"
                        className={`img`}
                        onClick={() => {
                          setCurrentImage(img.url);
                        }}
                      />
                    </div>
                  );
                }
              })}
            </div>
            <div className="main__images">
              <img src={currentImage} />
            </div>
          </div>

          <div className="discription__container">
            <h2>{product?.name}</h2>
            {product && priceAndDiscount()}
            <h4>Date Created</h4>
            <p> {formateDate(product?.dateCreated.split(",")[0])}</p>
            <h4>Quantity Available</h4>
            <p> {product?.quantity}</p>

            <h4>Category</h4>
            <p>{product?.category}</p>

            <h4>Description</h4>
            <p>{product?.description}</p>

            <div className="info">
                <div className="size__container">
                  <h4>Sizes</h4>
                  <div className="small__boxes__container">
                   

                   <p className={`small__box ${product?.sizes?.xs && "selected"}`}>XS</p>
                   <p className={` small__box ${product?.sizes?.s && "selected"}`}>S</p>
                   <p className={`small__box ${product?.sizes?.m && "selected"}`}>M</p>
                   <p className={`small__box ${product?.sizes?.xl && "selected"}`}>Xl</p>
                   <p className={`small__box ${product?.sizes?.xxl && "selected"}`}>XXL</p>
                   
          
                  </div>
                </div>
                <div className="size__container">
                  <h4>Gender</h4>
                  <div className="small__boxes__container">

                       <p className={`small__box ${product?.gender?.male && "selected"}`}>Male</p>
                       <p className={`small__box ${product?.gender?.female && "selected"}`}>Female</p>
                       <p className={`small__box ${product?.gender?.unisex && "selected"}`}>Unisex</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </ProductDetailsStyle>
  );
};
export default ProductDetailsModal;
