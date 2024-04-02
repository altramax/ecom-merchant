import { useEffect, useState } from "react";
import NotificationStyle from "./NotificationStyles";
import close from "../../../assets/Icons/cancle.svg";

type notificationType = {
  id: string;
  title: string;
  body: string;
  openModal: boolean;
  selectedId: string;
  closeModal: Function;
};

const Notification = ({
  id,
  title,
  body,
  openModal,
  selectedId,
  closeModal,
}: notificationType) => {
  const [read, setRead] = useState<boolean | null>(null);

  useEffect(() => {
    handlerRead();
  }, [openModal]);

  const handlerRead = () => {
    if (openModal) {
      setRead(true);
    }
  };

  return (
    <NotificationStyle>
      <div className="notification__container" key={id}>
        {openModal && selectedId === id ? (
          <div className="notification__modal">
            <div className="img__container">
              <img src={close} alt="close modal" onClick={() => closeModal} />
            </div>
            <div>
              <h4>{title}</h4>
              <p> {body}</p>
            </div>
          </div>
        ) : (
          <div className="notification__bar">
            {read === true && selectedId === id ? null : (
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
