import { useEffect, useState } from "react";
import NotificationStyle from "./NotificationStyles";
import close from "../../../assets/Icons/cancle.svg";

type notificationType = {
  id: string;
  title: string;
  body: string;
};

const Notification = ({
  id,
  title,
  body
}: notificationType) => {
  const [read, setRead] = useState<boolean | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);


  useEffect(() => {
    handlerRead();
  }, [openModal]);

  const handlerRead = () => {
    if (openModal) {
      setRead(true);
    }
  };

  const handlerModal = (evt: boolean) => {
    setOpenModal(evt);
  };


  return (
    <NotificationStyle>
      <div className="notification__container" key={id}>
        {openModal ? (
          <div className="notification__modal">
            <div className="img__container">
              <img src={close} alt="close modal" onClick={()=> handlerModal(false)} />
            </div>
            <div>
              <h4>{title}</h4>
              <p> {body}</p>
            </div>
          </div>
        ) : (
          <div className="notification__bar" onClick={()=> handlerModal(true)} >
            {read === true ? null : (
              <div className="red__dot"></div>
            )}
            <div>
              <h4>{title}</h4>
              <p>{`${body.slice(0, 30)}...`}</p>
            </div>
          </div>
        )}
      </div>
    </NotificationStyle>
  );
};

export default Notification;
