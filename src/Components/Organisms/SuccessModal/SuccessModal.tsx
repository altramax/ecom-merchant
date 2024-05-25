import React, { useEffect } from "react";
import SuccessModalStyle from "./SuccessModalStyle";
import { useNavigate } from "react-router-dom";
import success from "../../../assets/Icons/success.gif";

type SuccessModalProps = {
  handleClose: Function;
  relocate: any;
  title: string;
};

const SuccessModal: React.FC<SuccessModalProps> = ({
  title,
  handleClose,
  relocate
}) => {
  const navigate = useNavigate()
  useEffect(() => {
    window.setTimeout(() => {
      handleClose();
      navigate(relocate)
    }, 3000);
  }, []);
  return (
    <SuccessModalStyle>
      <div className="successs-modal-overlay">
        <div className="success-modal-content">
          <img src={success} alt="modal_gif" />
          <p className="success-modal-title">{title}</p>
        </div>
      </div>
    </SuccessModalStyle>
  );
};

export default SuccessModal;
