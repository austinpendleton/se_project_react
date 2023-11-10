import { NavLink } from "react-router-dom";
import "../blocks/Header.css";
import headerAvatar from "../images/avatar-wtwr.svg";
import headerLogo from "../images/wtwr-logo.svg";
import ToggleSwitch from "./ToggleSwitch";
import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

const Header = ({
  onCreateModal,
  onLoginModal,
  onRegisterModal,
  isLoggedIn,
  handleMobile,
}) => {
  const data = useContext(CurrentUserContext);
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__logo">
          <NavLink exact to="/">
            <div>
              <img src={headerLogo} alt="logo" />
            </div>
          </NavLink>
          <div className="header__date">{currentDate}, Utah</div>
        </div>
      </div>
      {/* <button
        className="header__button"
        type="button"
        aria-label="mobile menu"
        onClick={handleMobile}
      >
        <img
          src={headerButton}
          className="header__mobile-menu"
          alt="Header Mobile Menu"
        />
      </button> */}
      <div className="header__right">
        {isLoggedIn && (
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
            <NavLink className="header__link" to="/profile">
              <div className="header__name">
                {data?.name || "Not logged In"}
              </div>
              <div className="header__avatar-logo">
                <img
                  className="header__avatar-image"
                  src={data?.avatar}
                  alt="avatar"
                />
              </div>
            </NavLink>
          </div>
        )}
        {!isLoggedIn && (
          <div className="header__avatar-logo-container">
            <div className="header__avatar-logo">
              <div className="header__slider"></div>
              <ToggleSwitch />
              <button
                className="header__button"
                type="text"
                onClick={onRegisterModal}
              >
                Sign Up
              </button>
            </div>
            <button
              className="header__button-login"
              type="text"
              onClick={onLoginModal}
            >
              Log In
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
