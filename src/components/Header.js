import { NavLink } from "react-router-dom";
import "../blocks/Header.css";
import headerAvatar from "../images/avatar-wtwr.svg";
import headerLogo from "../images/wtwr-logo.svg";
import ToggleSwitch from "./ToggleSwitch";

const Header = ({ onCreateModal }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <div className="header__logo">
        <NavLink exact to="/">
          <div>
            <img src={headerLogo} alt="logo" />
          </div>
        </NavLink>
        <div className="header__date">{currentDate}, Utah</div>
      </div>
      <div className="header__avatar-logo">
        <div className="header__slider"></div>
        <ToggleSwitch />
        <div>
          <button
            className="header__button"
            type="text"
            onClick={onCreateModal}
          >
            +Add New Clothes
          </button>
        </div>
        <NavLink to="/profile">
          <div className="header__name">Austin Pendleton</div>
          <div className="header__avatar-logo">
            <img
              className="header__avatar-image"
              src={headerAvatar}
              alt="avatar"
            />
          </div>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
