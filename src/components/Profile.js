import "../blocks/Profile.css";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";

const Profile = ({ cards, onCardClick, onCardDelete, onAddNewClick }) => (
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
      </div>
    </div>
  </div>
);

export default Profile;
