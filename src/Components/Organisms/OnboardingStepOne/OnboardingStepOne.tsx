import OnboardingStepOnestyle from "./OnboardingStepOneStyle";
import Button from "../../Molecule/Button/Button";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import { stepOne } from "../../../Redux/StepForm";
import { useEffect, useRef, useState } from "react";
import delete_icon from "../../../assets/Icons/trash.svg";

type OnboardType = {
  next: Function;
  skip: Function;
};

type fieldsType = {
  storeName: string;
  storeAddress: string;
  storePhonenumber: string;
  countryAndState: string;
};

const OnboardingStepOne = ({ next, skip }: OnboardType) => {
  const dispatch = useAppDispatch();
  const stepForm = useAppSelector((state) => state.stepForm);
  const color = useAppSelector((state) => state.color);
  const [error, setError] = useState("");
  const file = useRef<any>();
  const [selectedImage, setSelectedImage] = useState<any>("");
  const [fields, setfields] = useState<fieldsType>({
    storeName: "",
    storeAddress: "",
    storePhonenumber: "",
    countryAndState: "",
  });

  // Note: set this use effect to stop setting values from controlled to uncontrolled
  useEffect(() => {
    if (stepForm.stepOne !== "") {
      setfields(stepForm.stepOne);
      setSelectedImage(stepForm.stepOne.brandLogo);
    }
  }, []);

  const handlerSubmit = async (evt: any) => {
    evt.preventDefault();
    const numberValidation = new RegExp(/[^\d]/g);

    if (fields.storeAddress === "" || fields.storeAddress.length <= 1) {
      setError("Incorrect Address");
    } else if (
      fields.storePhonenumber === "" ||
      fields.storePhonenumber.length < 11 ||
      numberValidation.test(fields.storePhonenumber)
    ) {
      setError("Incorrect Phone Number");
    } else if (!selectedImage) {
      setError("No Image Uploaded");
    } else if (
      fields.storeAddress.length > 1 &&
      !numberValidation.test(fields.storePhonenumber) &&
      selectedImage
    ) {
      setError("");
      await dispatch(
        stepOne({
          storeName: fields.storeName,
          storeAddress: fields.storeAddress,
          storePhonenumber: fields.storePhonenumber,
          countryAndState: fields.countryAndState,
          brandLogo: selectedImage,
        })
      );
      next();
    }
  };

  const onchange = async (name: string, value: string) => {
    const fieldsValue: any = Object.assign({}, fields);
    fieldsValue[name] = value;
    await setfields(fieldsValue);
  };

  const handlerClick = () => {
    file.current.click();
  };

  const fileHandler = (evt: any) => {
    const files = evt.target.files;
    setSelectedImage(files[0].name);
    console.log(files[0]);
  };

  const deleteFile = () => {
    setSelectedImage("");
  };

  const handleDragStart = () => {};

  const handleDragOver = (evt: any) => {
    evt.preventDefault();
  };

  const handleDragDrop = (evt: any) => {
    evt.preventDefault();
    const { files } = evt.dataTransfer;
    if (files) {
      const file = [...files];

      setSelectedImage(file[0].name);
    }
  };

  return (
    <OnboardingStepOnestyle>
      <form id={color.mode} className='step__form'>
        <div className='step__one__container'>
          <div className='step__one__heading'>
            <h1>Business Information</h1>
            <p className='step__one__heading'>
              Kindly ensure that all the informations provide are correct before
              proceeding
            </p>
          </div>
          <div className='input__groups'>
            <div className='input__group'>
              <input
                type='text'
                name='storeName'
                placeholder='Store Name'
                value={fields.storeName}
                onChange={(evt) => onchange(evt.target.name, evt.target.value)}
              />
            </div>
            <div className='input__group'>
              <input
                type='text'
                name='storeAddress'
                value={fields.storeAddress}
                placeholder='Store Address'
                onChange={(evt) => onchange(evt.target.name, evt.target.value)}
              />
              {error.includes("Address") && <small>{error}</small>}
            </div>
          </div>
          <div className='input__groups'>
            <div className='input__group'>
              <input
                type='text'
                name='storePhonenumber'
                value={fields.storePhonenumber}
                placeholder='Store Phone Number'
                onChange={(evt) => onchange(evt.target.name, evt.target.value)}
              />
              {error.includes("Phone") && <small>{error}</small>}
            </div>
            <div className='input__group'>
              <input
                type='text'
                name='countryAndState'
                value={fields.countryAndState}
                placeholder='Country And State'
                onChange={(evt) => onchange(evt.target.name, evt.target.value)}
              />
            </div>
          </div>
          <div
            className='image__upload__groups'
            onDrop={handleDragDrop}
            onDragOver={handleDragOver}
          >
            <div className='upload__text' onDragStart={handleDragStart}>
              <h3>Brand Logo</h3>
              <p>
                Drag file here or <span onClick={handlerClick}>Click here</span>{" "}
                to upload
              </p>
              {error.includes("Image") && !selectedImage && (
                <small>{error}</small>
              )}
            </div>
            <input
              type='file'
              name='  brandLogo'
              className=' hidden'
              ref={file}
              onChange={fileHandler}
            />
            <div className='uploaded__image'>
              {selectedImage && (
                <div className='image__delete'>
                  <p>{selectedImage}</p>
                  <img src={delete_icon} alt='' onClick={deleteFile} />
                </div>
              )}
            </div>
          </div>
          <div className='buttons__group'>
            <Button
              type='button'
              value='Skip for Now'
              Click={skip}
              className='button'
            />
            <Button
              type='submit'
              value='Next'
              Click={(evt: any) => handlerSubmit(evt)}
              className='button'
            />
          </div>
        </div>
      </form>
    </OnboardingStepOnestyle>
  );
};

export default OnboardingStepOne;
