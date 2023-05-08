import "../blocks/Header.css";

const Header = ({ onCreateModal }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../images/wtwr-logo.svg").default} alt="logo" />
        </div>
        <div className="header__date">May 8th, Utah</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button
            className="header__button"
            type="text"
            onClick={onCreateModal}
          >
            +Add New Clothes
          </button>
        </div>
        <div className="header__name">Austin Pendleton</div>
        <div>
          <img
            src={require("../images/avatar-wtwr.svg").default}
            alt="avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
