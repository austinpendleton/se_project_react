import React, { useContext } from "react";
import "../blocks/ItemCard.css";
import likeButton from "../images/like.svg";
import likedButton from "../images/liked.svg";
import CurrentUserContext from "../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectCard, onCardLike }) => {
  const handleCardClick = () => {
    onSelectCard(item);
  };
  const context = useContext(CurrentUserContext);

  const isLiked = item.likes.some((id) => id === context._id);
  const imageSrc = isLiked ? likedButton : likeButton;

  return (
    <div className="card">
      <img
        src={item.link || item.imageUrl}
        alt={item.name}
        className="card__image"
        onClick={handleCardClick}
      />
      <div className="card__container">
        <div className="card__name">{item.name}</div>
        <img
          className="card__like-button"
          src={imageSrc}
          alt="like"
          onClick={() =>
            onCardLike({
              id: item?.id || item?._id,
              isLiked: isLiked,
            })
          }
        />
      </div>
    </div>
  );
};

export default ItemCard;
