import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import Button from "../../Molecule/Button/Button";
import AddProductModalStyle from "./AddProductModalStyle";
import productIcon from "../../../assets/Icons/add-product.svg";
import circle from "../../../assets/Icons/circle in circle.svg";
import { useRef, useState } from "react";
import plus_circle from "../../../assets/Icons/plus-circle.svg";
import naira from "../../../assets/Icons/naira.svg";
import Select from "react-select";

type addProductType = {
  close: Function;
};

const AddProductModal = ({ close }: addProductType) => {
  const dispatch = useAppDispatch();
  const color = useAppSelector((state) => state.color);
  const [newCategory, setNewCategory] = useState("");
  const pickImage = useRef<any>();
  const pickImage2 = useRef<any>();
  const [selectedImage, setSelectedImage] = useState("one");
  const [currentImage, setCurrentImage] = useState<string>();
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
  const [imageFields, setImageFields] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
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

  const handlerImageselect = async (evt: any) => {
    let img = URL.createObjectURL(evt.target.files[0]);
    if (evt.target.files && selectedImage === "one") {
      setImageFields((prev) => ({
        ...prev,
        one: img,
      }));
    } else if (evt.target.files && selectedImage === "two") {
      setImageFields((prev) => ({
        ...prev,
        two: img,
      }));
    } else if (evt.target.files && selectedImage === "three") {
      setImageFields((prev) => ({
        ...prev,
        three: img,
      }));
    } else if (evt.target.files && selectedImage === "four") {
      setImageFields((prev) => ({
        ...prev,
        four: img,
      }));
    }
    setCurrentImage(img);
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

  console.log(sizes);
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

  const submitHandler = (evt: any) => {
    evt.preventDefault();
  };

  // console.log(pickImage.current?.value);

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
                />
              </div>
              <div className="flex">
                <div className="size__container">
                  <p>Size</p>
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
                      className={`small__box small_width ${
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
                      className={`small__box small_width ${
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
                        gender.male && "selected"
                      }`}
                    >
                      <img src={circle} alt="" />
                      <input
                        type="text"
                        readOnly
                        value={"Male"}
                        name="male"
                        className={` ${gender.male && "selected"}`}
                        onClick={(evt: any) => {
                          handlerGenderChange(evt.target.name);
                        }}
                      />
                    </div>
                    <div
                      className={`small__box large_width ${
                        gender.female && "selected"
                      }`}
                    >
                      <img src={circle} alt="" />
                      <input
                        type="text"
                        readOnly
                        value={"Female"}
                        name="female"
                        className={`${gender.female && "selected"}`}
                        onClick={(evt: any) => {
                          handlerGenderChange(evt.target.name);
                        }}
                      />
                    </div>
                    <div
                      className={`small__box large_width ${
                        gender.unisex && "selected"
                      }`}
                    >
                      <img src={circle} alt="" />
                      <input
                        type="text"
                        readOnly
                        value={"Unisex"}
                        name="unisex"
                        className={`${gender.unisex && "selected"}`}
                        onClick={(evt: any) => {
                          handlerGenderChange(evt.target.name);
                        }}
                      />
                    </div>
                    {/* <div className="small__box">
                      <img src={circle} alt="" />
                      Women
                    </div>
                    <div className="small__box">
                      <img src={circle} alt="" />
                      Unisex
                    </div> */}
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
                    type="text"
                    name="price"
                    id="paddingleft"
                    onChange={(evt: any) => {
                      handlerChange(evt.target.name, evt.target.value);
                    }}
                  />
                  <img src={naira} alt="nairaIcon" className="image" />
                </div>

                <div className="input__container">
                  <label htmlFor="input">Quantity</label>
                  <input
                    type="text"
                    name="quantity"
                    onChange={(evt: any) => {
                      handlerChange(evt.target.name, evt.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="flex">
                <div className="input__container">
                  <label htmlFor="input">Discount</label>
                  <input
                    type="text"
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
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid__container__two">
            <div className="images__container">
              <h2>Upload Images</h2>
              <div className="main__images">
                <img src={currentImage} ref={pickImage2} />
              </div>
              <div className="sub__images">
                <input
                  type="file"
                  className="hidden"
                  ref={pickImage}
                  onChange={handlerImageselect}
                />
                <div
                  className={`sub__image ${
                    imageFields.one === "" && "add__icon__img"
                  }`}
                >
                  <img
                    src={imageFields.one === "" ? plus_circle : imageFields.one}
                    alt="product Image"
                    className={`img`}
                    onClick={() => {
                      openImages();
                      setSelectedImage("one");
                    }}
                  />
                </div>
                <div
                  className={`sub__image ${
                    imageFields.two === "" && "add__icon__img"
                  }`}
                >
                  <img
                    src={imageFields.two === "" ? plus_circle : imageFields.two}
                    alt="product Image"
                    className={`img`}
                    onClick={() => {
                      openImages();
                      setSelectedImage("two");
                    }}
                  />
                </div>
                <div
                  className={`sub__image ${
                    imageFields.three === "" && "add__icon__img"
                  }`}
                >
                  <img
                    src={
                      imageFields.three === "" ? plus_circle : imageFields.three
                    }
                    alt="product Image"
                    className={`img`}
                    onClick={() => {
                      openImages();
                      setSelectedImage("three");
                    }}
                  />
                </div>
                <div
                  className={`sub__image ${
                    imageFields.four === "" && "add__icon__img"
                  }`}
                >
                  <img
                    src={
                      imageFields.four === "" ? plus_circle : imageFields.four
                    }
                    alt="product Image"
                    className={`img`}
                    onClick={() => {
                      openImages();
                      setSelectedImage("four");
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="Price__information">
              <h2>Category</h2>

              <div className="input__container">
                <label htmlFor="input">Product Category</label>
                <Select
                  options={options}
                  styles={customStyles}
                  onChange={selectValueHandler}
                  placeholder="Select a Category"
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
            <div className="button__group">
              <Button
                type="submit"
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
    </AddProductModalStyle>
  );
};

export default AddProductModal;
