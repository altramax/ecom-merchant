import OnboardingStepOnestyle from "./OnboardingStepOneStyle";
import Button from "../../Molecule/Button/Button";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import { stepOne, stepTwo } from "../../../Redux/StepForm";

type OnboardType = {
  next: Function;
};

const OnboardingStepOne = ({ next }: OnboardType) => {
  const dispatch = useAppDispatch();
  const stepForm = useAppSelector((state) => state.stepForm);
  const color = useAppSelector((state) => state.color);

  const handlerSubmit = async (evt: any) => {
    evt.preventDefault();
    await dispatch(stepOne({ display: "fry" }));
    next();
  };

  return (
    <OnboardingStepOnestyle>
    
      <form id={color.mode}>
        <div className="step__one__container">
          <div className="step__one__heading">
            <h1>Provide all necessary details</h1>
            <p className="step__one__heading">
              Kindly ensure that all the informations provide are correct before
              proceeding
            </p>
          </div>
          <div className="input__groups">
            <div className="input__group">
              <title>name</title>
              <input type="text" />
            </div>
            <div className="input__group">
              <title>name</title>
              <input type="text" />
            </div>
          </div>
          <div className="input__groups">
            <div className="input__group">
              <title>name</title>
              <input type="text" />
            </div>
            <div className="input__group">
              <title>name</title>
              <input type="text" />
            </div>
          </div>
          <div className="input__groups">
            <div className="input__group">
              <title>name</title>
              <input type="text" />
            </div>
            <div className="input__group">
              <title>name</title>
              <input type="text" />
            </div>
          </div>
          <Button
            type="submit"
            value="Submit"
            Click={(evt: any) => handlerSubmit(evt)}
            className=""
          />
          {/* <Button type="submit" value="Skip to Next" Click={skip} className=""/> */}
        </div>
      </form>
    </OnboardingStepOnestyle>
  );
};

export default OnboardingStepOne;
