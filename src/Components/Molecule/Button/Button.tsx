import ButtonStyle from "./ButtonStyle";
import loading from "../../../assets/Icons/loading.svg";
import { useState } from "react";
import { useAppSelector } from "../../../Redux/Hooks";

type buttonType = {
  value: string;
  Click:  Function;
  type: "button" | "submit" | "reset" | undefined;
  className : string ;
};

const Button = ({ value, Click, type, className }: buttonType) => {
  const [disabled, setDisabled] = useState(false);
  const color = useAppSelector((state)=>state.color)

  const onClickHandler = async (evt:any) => {
    setDisabled(true);
    await Click(evt);
    setDisabled(false);
  };

  return (
    <ButtonStyle>
      <button id={`button${color.mode}`} type={type} onClick={onClickHandler} disabled={disabled} className={`${className !== "" ? className : "style"}`}>
        {disabled ? (
          <img src={loading} alt="loading" className="loading__icon" />
        ) : (
          value
        )}{" "}
      </button>
    </ButtonStyle>
  );
};

export default Button;
