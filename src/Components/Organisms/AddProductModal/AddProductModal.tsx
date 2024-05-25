import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import Button from "../../Molecule/Button/Button";
import AddProductModalStyle from "./AddProductModalStyle";
import productIcon from "../../../assets/Icons/add-product.svg";
import circle from "../../../assets/Icons/circle in circle.svg";
import { useEffect, useRef, useState } from "react";
import plus_circle from "../../../assets/Icons/plus-circle.svg";
import naira from "../../../assets/Icons/naira.svg";
import Select from "react-select";
import LoadingIcon from "../../../assets/Icons/loading.svg";
import { addProducts } from "../../../Redux/ProductsSlice";
import { v4 as uuidv4 } from "uuid";
import {
  clearImageSlice,
  deleteImage,
  uploadImage,
} from "../../../Redux/UploadImageSlice";
import deleteIcon from "../../../assets/Icons/trash.svg";
import SuccessModal from "../SuccessModal/SuccessModal";

type addProductType = {
  close: Function;
};

const AddProductModal = ({ close }: addProductType) => {
  const dispatch = useAppDispatch();
  const imagesArray = useAppSelector((state) => state.imageUpload.images);
  const imagesLoading = useAppSelector((state) => state.imageUpload.loading);
  const color = useAppSelector((state) => state.color);
  const [newCategory, setNewCategory] = useState("");
  const pickImage = useRef<any>();
  let date = new Date;
  const [selectedImage, setSelectedImage] = useState<any>("");
  const [currentImage, setCurrentImage] = useState<string>();
  const [successModal, setSuccessModal] = useState(false);
  const [sizes, setSizes] = useState<Record<string, boolean>>({
    xs: false,
    s: false,
    m: false,
    xl: false,
    xxl: false,
  });
  const [gender, setGender] = useState<Record<string, boolean>>({
    male: false,
    female: false,
    unisex: false,
  });
  const [fields, setFields] = useState({
    name: "",
    description: "",
    price: 0,
    quantity: 0,
    discount: 0,
    nameOfDiscount: "",
    category: "",
    images: [],
  });

  useEffect(() => {
    setCurrentImage(imagesArray.find((image: any) => image.url !== "")?.url);
  }, [imagesArray]);

  const handlerImageselect = async (evt: any) => {
    let file = evt.target.files;
    if (file) {
      dispatch(uploadImage({ file: file[0], position: selectedImage }));
      pickImage.current.value = "";
    }
  };

  const handlerImageDelete = async (evt: any) => {
    if (currentImage === evt.url) {
      setCurrentImage(imagesArray.find((image: any) => image.url !== "").url);
    }
    dispatch(deleteImage(evt));
  };

  const openImages = () => {
    pickImage.current?.click();
  };

  const handlerChange = async (name: string, value: string) => {
    const fieldsValues: any = Object.assign({}, fields);
    fieldsValues[name] = value;
    await setFields(fieldsValues);
  };

  const handlerSizeChange = async (name: string) => {
    let value = sizes[name];
    const fieldsValues: any = Object.assign({}, sizes);
    fieldsValues[name] = !value;
    await setSizes(fieldsValues);
  };

  const handlerGenderChange = async (name: string) => {
    let value = gender[name];
    const fieldsValues: any = Object.assign({}, gender);
    fieldsValues[name] = !value;
    await setGender(fieldsValues);
  };

  const customStyles = {
    option: (styles: any, state: any) => ({
      ...styles,
      backgroundColor: state.isFocused ? "#deebff" : "#fff",
      color: "#000",
      fontFamily: "Montserrat",
    }),
    control: (baseStyles: any) => ({
      ...baseStyles,
      border: "1px solid #7E8EA6",
      borderRadius: "8px",
      minHeight: "44px",
      paddingRight: "30px",
      fontFamily: "Montserrat",
    }),
    dropdownIndicator: (baseStyles: any) => ({
      ...baseStyles,
      display: "none",
    }),
    indicatorsContainer: (baseStyles: any) => ({
      ...baseStyles,
      border: 0,
      display: "none",
      fontFamily: "Montserrat",
    }),
    singleValue: (baseStyles: any) => ({
      ...baseStyles,
      color: "#7E8EA6",
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
    }),
  };

  const options = [
    { value: "Men's Clothing", label: "Men's Clothing" },
    { value: "Women's Clothing", label: "Women's Clothing" },
    { value: "Men's Shoes", label: "Men's Shoes" },
    { value: "Women's Shoes", label: "Women's Shoes" },
    { value: "Accessories", label: "Accessories" },
    { value: "Bags", label: "Bags" },
    { value: "Watches", label: "Watches" },
    { value: "Belts", label: "Belts" },
    { value: "Sun Glasses", label: "Sun Glasses" },
    { value: "Others", label: "Others" },
  ];

  const selectValueHandler = (evt: any) => {
    setFields((previousValues) => ({ ...previousValues, category: evt.value }));
  };

  const selectNewCategory = (evt: any) => {
    evt.preventDefault();
    setNewCategory(evt.target.value);
  };

  const showSuccessModal = () => {
    setSuccessModal(true);
  };

  const hideSuccessModal = () => {
    setSuccessModal(false);
  };

  const submitHandler = async (evt: any) => {
    evt.preventDefault();

    const productData = {
      id: `${uuidv4()}`,
      name: fields.name,
      description: fields.description,
      price: fields.price,
      quantity: fields.quantity,
      discount: fields.discount,
      nameOfDiscount: fields.nameOfDiscount,
      category: `${
        fields.category === "Others" ? newCategory : fields.category
      }`,
      images: imagesArray,
      sizes: sizes,
      gender: gender,
      dateCreated: date.toLocaleString(),
    };
      await dispatch(addProducts(productData));
      dispatch(clearImageSlice());
      showSuccessModal();
  };

  return (
    <AddProductModalStyle>
      <form
        className="addProduct__container"
        id={color.mode}
        onSubmit={submitHandler}
      >
        <div className="addProduct__header">
          <img src={productIcon} alt="" />
          <h2>Add New Product</h2>
        </div>

        <div className="addProduct__grid__container">
          <div className="grid__container__one">
            <div className="general__information">
              <h2>General Information</h2>
              <div className="input__container">
                <label htmlFor="input">Name</label>
                <input
                  type="text"
                  name="name"
                  value={fields.name}
                  onChange={(evt: any) => {
                    handlerChange(evt.target.name, evt.target.value);
                  }}
                  required
                />
              </div>
              <div className="input__container">
                <label htmlFor="input">Description</label>
                <textarea
                  rows={8}
                  name="description"
                  value={fields.description}
                  onChange={(evt: any) => {
                    handlerChange(evt.target.name, evt.target.value);
                  }}
                  required
                />
              </div>
              <div className="flex">
                <div className="size__container">
                  <p>Sizes</p>
                  <small>Pick Available Size</small>
                  <div className="small__boxes__container">
                    <input
                      type="text"
                      readOnly
                      value={"XS"}
                      name="xs"
                      className={`small__box small_width ${
                        sizes.xs && "selected"
                      }`}
                      onClick={(evt: any) => {
                        handlerSizeChange(evt.target.name);
                      }}
                    />
                    <input
                      type="text"
                      readOnly
                      value={"S"}
                      name="s"
                      className={`small__box small_width ${
                        sizes.s && "selected"
                      }`}
                      onClick={(evt: any) => {
                        handlerSizeChange(evt.target.name);
                      }}
                    />
                    <input
                      type="text"
                      readOnly
                      value={"M"}
                      name="m"
                      className={`small__box small_width  ${
                        sizes.m && "selected"
                      }`}
                      onClick={(evt: any) => {
                        handlerSizeChange(evt.target.name);
                      }}
                    />

                    <input
                      type="text"
                      readOnly
                      value={"XL"}
                      name="xl"
                      className={`small__box small_width  ${
                        sizes.xl && "selected"
                      }`}
                      onClick={(evt: any) => {
                        handlerSizeChange(evt.target.name);
                      }}
                    />
                    <input
                      type="text"
                      readOnly
                      value={"XXL"}
                      name="xxl"
                      className={`small__box small_width ${
                        sizes.xxl && "selected"
                      }`}
                      onClick={(evt: any) => {
                        handlerSizeChange(evt.target.name);
                      }}
                    />
                  </div>
                </div>
                <div className="size__container">
                  <p>Gender</p>
                  <small>Pick Available Gender</small>
                  <div className="small__boxes__container">
                    <div
                      className={`small__box large_width ${
                        gender.male ? "selected" : "deselected"
                      } `}
                      onClick={(evt: any) => {
                        handlerGenderChange(evt.target.name);
                      }}
                    >
                      <img src={circle} alt="" />
                      <input type="text" readOnly value={"Male"} name="male" />
                    </div>
                    <div
                      className={`small__box large_width ${
                        gender.female ? "selected" : "deselected"
                      }`}
                      onClick={(evt: any) => {
                        handlerGenderChange(evt.target.name);
                      }}
                    >
                      <img src={circle} alt="" />
                      <input
                        type="text"
                        readOnly
                        value={"Female"}
                        name="female"
                      />
                    </div>
                    <div
                      className={`small__box large_width ${
                        gender.unisex ? "selected" : "deselected"
                      }`}
                      onClick={(evt: any) => {
                        handlerGenderChange(evt.target.name);
                      }}
                    >
                      <img src={circle} alt="" />
                      <input
                        type="text"
                        readOnly
                        value={"Unisex"}
                        name="unisex"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Price__information">
              <h2>Price Information</h2>
              <div className="flex">
                <div className="input__container">
                  <label htmlFor="input">Price</label>
                  <input
                    type="number"
                    name="price"
                    id="paddingleft"
                    onChange={(evt: any) => {
                      handlerChange(evt.target.name, evt.target.value);
                    }}
                    required
                  />
                  <img src={naira} alt="nairaIcon" className="image" />
                </div>

                <div className="input__container">
                  <label htmlFor="input">Quantity</label>
                  <input
                    type="number"
                    name="quantity"
                    onChange={(evt: any) => {
                      handlerChange(evt.target.name, evt.target.value);
                    }}
                    required
                  />
                </div>
              </div>

              <div className="flex">
                <div className="input__container">
                  <label htmlFor="input">Discount</label>
                  <input
                    type="number"
                    name="discount"
                    id="paddingleft"
                    onChange={(evt: any) => {
                      handlerChange(evt.target.name, evt.target.value);
                    }}
                  />
                  <img src={naira} alt="nairaIcon" className="image" />
                </div>

                <div className="input__container">
                  <label htmlFor="input">Name of Discount</label>
                  <input
                    type="text"
                    name="nameOfDiscount"
                    onChange={(evt: any) => {
                      handlerChange(evt.target.name, evt.target.value);
                    }}
                    required={fields.discount > 0 ? true : false}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid__container__two">
            <div className="Price__information">
              <h2>Category</h2>

              <div className="input__container">
                <label htmlFor="input">Product Category</label>{" "}
                <Select
                  options={options}
                  styles={customStyles}
                  onChange={selectValueHandler}
                  placeholder="Select a Category"
                  required
                />
                {fields.category === "Others" && (
                  <input
                    type="text"
                    name="category"
                    className="margin"
                    value={newCategory}
                    onChange={selectNewCategory}
                    placeholder="Write a Category"
                  />
                )}
              </div>
            </div>
            <div className="images__container">
              <h2>Upload Images</h2>
              <div className="main__images">
                <img src={currentImage} />
              </div>
              <div className="sub__images__container">
                <input
                  type="file"
                  className="hidden"
                  ref={pickImage}
                  onChange={handlerImageselect}
                />
                {imagesArray?.map((entry: any, i: string) => {
                  return (
                    <div
                      className={`sub__image ${
                        entry.url === "" && "add__icon__img"
                      }`}
                      key={i}
                    >
                      {entry.url !== "" && (
                        <img
                          src={deleteIcon}
                          alt=""
                          className="small_img absolute"
                          onClick={() =>
                            handlerImageDelete({
                              name: entry.name,
                              position: i,
                            })
                          }
                        />
                      )}
                      {entry.url === "" && (
                        <img
                          src={`${
                            imagesLoading[i] ? LoadingIcon : plus_circle
                          }`}
                          alt="product Image"
                          className={`img ${
                            imagesLoading[i] ? "loading__icon" : ""
                          }`}
                          onClick={() => {
                            openImages();
                            setSelectedImage(i);
                          }}
                        />
                      )}
                      {entry.url !== "" && (
                        <img
                          src={entry.url}
                          alt="product Image"
                          className={`img`}
                          onClick={() => {
                            setCurrentImage(entry.url);
                          }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="button__group">
              <Button
                type="button"
                className="button"
                value="Save to Draft"
                Click={close}
              />
              <Button
                type="submit"
                className="button"
                value="Add Product"
                Click={() => {}}
              />
            </div>
          </div>
        </div>
      </form>
      {successModal && (
        <SuccessModal
          title="Product Added Successfully"
          handleClose={hideSuccessModal}
          relocate={"/wearhouse"}
        />
      )}
    </AddProductModalStyle>
  );
};

export default AddProductModal;
