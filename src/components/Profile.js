import "../blocks/Profile.css";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import "../blocks/ItemCard.css";
import ItemCard from "./ItemCard";

const Profile = ({
  cards,
  onCardDelete,
  onAddNewClick,
  onSelectCard,
  onCreateModal,
}) => {
  const handleCardClick = (item) => {
    onSelectCard(item);
  };
  return (
    <div className="profile">
      <div className="profile__container">
        <div className="profile__sidebar">
          <SideBar />
        </div>
        <div className="profile__clothes">
          <ClothesSection
            cards={cards}
            onCreateModal={onCreateModal}
            onAddNewClick={onAddNewClick}
            onCardClick={handleCardClick}
            onCardDelete={onCardDelete}
          />
          <section className="cards">
            <ul className="cards__list">
              {cards.map((card) => (
                <ItemCard
                  key={card._id}
                  name={card.name}
                  item={card}
                  id={card.id}
                  weather={card.weather}
                  link={card.link}
                  onSelectCard={onSelectCard}
                />
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
