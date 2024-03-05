import OnboardingStepTwostyle from "./OnboardingStepTwoStyle";
import Button from "../../Molecule/Button/Button";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import { stepTwo, stepClear } from "../../../Redux/StepForm";
import { useEffect, useRef, useState } from "react";
import delete_icon from "../../../assets/Icons/trash.svg";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../../Config/Config";
import { useNavigate } from "react-router-dom";

type OnboardType = {
  skip: Function;
};

type fieldsType = {
  ownersName: string;
  ownersAddress: string;
  ownersPhonenumber: string;
  countryAndState: string;
};

const OnboardingStepTwo = ({ skip }: OnboardType) => {
  const dispatch = useAppDispatch();
  const stepForm = useAppSelector((state) => state.stepForm);
  const color = useAppSelector((state) => state.color);
  const [error, setError] = useState("");
  const auth = useAppSelector((state) => state.auth);
  const file = useRef<any>();
  const [selectedImage, setSelectedImage] = useState<any>("");
  const navigate = useNavigate();
  const [fields, setfields] = useState<fieldsType>({
    ownersName: "",
    ownersAddress: "",
    ownersPhonenumber: "",
    countryAndState: "",
  });

  useEffect(() => {
    // dispatch(stepClear())
    if (stepForm.stepTwo !== "") {
      console.log("enter");
      setfields(stepForm.stepTwo);
      setSelectedImage(stepForm.stepTwo.profilePicture);
    }
  }, []);

  const handlerSubmit = async (evt: any) => {
    evt.preventDefault();
    const numberValidation = new RegExp(/[^\d]/g);

    if (fields.ownersAddress === "" || fields.ownersAddress.length <= 1) {
      setError("Incorrect Address");
    } else if (
      fields.ownersPhonenumber === "" ||
      fields.ownersPhonenumber.length < 11 ||
      numberValidation.test(fields.ownersPhonenumber)
    ) {
      setError("Incorrect Phone Number");
    } else if (!selectedImage) {
      setError("No Image Uploaded");
    } else if (
      fields.ownersAddress.length > 1 &&
      !numberValidation.test(fields.ownersPhonenumber) &&
      selectedImage
    ) {
      setError("");
      await dispatch(
        stepTwo({
          ownersName: fields.ownersName,
          ownersAddress: fields.ownersAddress,
          ownersPhonenumber: fields.ownersPhonenumber,
          countryAndState: fields.countryAndState,
          profilePicture: selectedImage,
        })
      );
      await setDoc(doc(db, "Merchant", `${auth.user.uid}`), {
        businessInformation: stepForm.stepOne,
        OwnersInformation: stepForm.stepTwo,
        skipForNow: stepForm.skipForNow 
      });
      navigate("/dashboard");
      dispatch(stepClear());
    }
  };
  console.log(stepForm.stepOne, stepForm.stepTwo);

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
    <OnboardingStepTwostyle>
      <form id={color.mode} className="step__form">
        <div className="step__one__container">
          <div className="step__one__heading">
            <h1>Business Owners Information</h1>
            <p className="step__one__heading">
              Kindly ensure that all the informations provide are correct before
              proceeding
            </p>
          </div>
          <div className="input__groups">
            <div className="input__group">
              {/* <title></title> */}
              <input
                type="text"
                name="ownersName"
                placeholder="Owners Name"
                value={fields.ownersName}
                onChange={(evt) => onchange(evt.target.name, evt.target.value)}
              />
            </div>
            <div className="input__group">
              {/* <title></title> */}
              <input
                type="text"
                name="ownersAddress"
                value={fields.ownersAddress}
                placeholder="Owners Address"
                onChange={(evt) => onchange(evt.target.name, evt.target.value)}
              />
              {error.includes("Address") && <small>{error}</small>}
            </div>
          </div>
          <div className="input__groups">
            <div className="input__group">
              {/* <title></title> */}
              <input
                type="text"
                name="ownersPhonenumber"
                value={fields.ownersPhonenumber}
                placeholder="Owners Phone Number"
                onChange={(evt) => onchange(evt.target.name, evt.target.value)}
              />
              {error.includes("Phone") && <small>{error}</small>}
            </div>
            <div className="input__group">
              {/* <title></title> */}
              <input
                type="text"
                name="countryAndState"
                value={fields.countryAndState}
                placeholder="Country And State"
                onChange={(evt) => onchange(evt.target.name, evt.target.value)}
              />
            </div>
          </div>
          <div
            className="image__upload__groups"
            onDrop={handleDragDrop}
            onDragOver={handleDragOver}
          >
            <div className="upload__text" onDragStart={handleDragStart}>
              <h3>Profile Picture</h3>
              <p>
                Drag file here or <span onClick={handlerClick}>Click here</span>{" "}
                to upload
              </p>
              {error.includes("Image") && !selectedImage && (
                <small>{error}</small>
              )}
            </div>
            <input
              type="file"
              name="  brandLogo"
              className=" hidden"
              ref={file}
              onChange={fileHandler}
            />
            <div className="uploaded__image">
              {selectedImage && (
                <div className="image__delete">
                  <p>{selectedImage}</p>
                  <img src={delete_icon} alt="" onClick={deleteFile} />
                </div>
              )}
            </div>
          </div>
          <div className="buttons__group">
            <Button
              type="button"
              value="Skip for Now"
              Click={skip}
              className="button"
            />
            <Button
              type="submit"
              value="Submit"
              Click={(evt: any) => handlerSubmit(evt)}
              className="button"
            />
          </div>
        </div>
      </form>
    </OnboardingStepTwostyle>
  );
};

export default OnboardingStepTwo;
