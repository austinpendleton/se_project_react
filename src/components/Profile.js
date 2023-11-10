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
  isOpen,
  logOut,
  onCardLike,
}) => {
  const handleCardClick = (item) => {
    onSelectCard(item);
  };
  return (
    <div className="profile">
      <div className="profile__container">
        <div className="profile__sidebar">
          <SideBar isOpen={isOpen} logOut={logOut} />
        </div>
        <div className="profile__info"></div>
        <div className="profile__clothes">
          <ClothesSection
            cards={cards}
            onCreateModal={onCreateModal}
            onAddNewClick={onAddNewClick}
            onCardClick={handleCardClick}
            onCardDelete={onCardDelete}
            onCardLike={onCardLike}
          />
          <section className="cards">
            <ul className="cards__list"></ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
