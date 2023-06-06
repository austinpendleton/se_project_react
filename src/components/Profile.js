import "../blocks/Profile.css";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import "../blocks/ItemCard.css";
import ItemCard from "./ItemCard";

function Profile({ cards, onCardClick, onCardDelete, onAddNewClick }) {
  <div className="profile">
    <div className="profile__container">
      <div className="profile__sidebar">
        <SideBar />
      </div>
      <div className="profile__clothes">
        <ClothesSection
          sectionData={cards}
          onAddNewClick={onAddNewClick}
          onCardClick={onCardClick}
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
                onCardClick={onCardClick}
              />
            ))}
          </ul>
        </section>
      </div>
    </div>
  </div>;
}

export default Profile;
