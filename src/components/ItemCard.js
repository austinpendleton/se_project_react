import React from "react";
import "../blocks/ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  const handleCardClick = () => {
    onSelectCard(item);
  };
  return (
    <div className="card">
      <div className="card__container">
        <img
          src={item.link || item.imageUrl}
          alt={item.name}
          className="card__image"
          onClick={handleCardClick}
        />
      </div>
      <div className="card__name">{item.name}</div>
    </div>
  );
};

export default ItemCard;
