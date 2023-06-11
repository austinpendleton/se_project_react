import React from "react";
import ItemCard from "./ItemCard";
import "../blocks/ClothesSection.css";

const ClothesSection = ({ cards, onCardClick, onCreateModal }) => {
  return (
    <div className="clothes">
      <div className="clothes__container">
        <div className="clothes__title">Your Items</div>
      </div>
      <button
        className="clothes__button"
        type="button"
        aria-label="Add"
        onClick={onCreateModal}
      >
        + Add New
      </button>
      <ul className="clothes__list">
        {cards.map((card) => (
          <ItemCard key={card._id} item={card} onSelectCard={onCardClick} />
        ))}
      </ul>
    </div>
  );
};

export default ClothesSection;
