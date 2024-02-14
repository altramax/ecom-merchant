import AvatarStyle from "./AvatarStyle";

type avatarType = {
  image: any;
  storename: string;
};
const Avatar = ({ image, storename }: avatarType) => {
  return (
    <AvatarStyle>
  
        {image !== undefined ? (
          <img src={image} alt="" className="avatar__img" />
        ) : (
          <p className="avatar__username">{storename[0]}</p>
        )}

    </AvatarStyle>
  );
};

export default Avatar;
