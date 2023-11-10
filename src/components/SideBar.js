import React from "react";
import { useContext } from "react";
import headerAvatar from "../images/avatar-wtwr.svg";
import "../blocks/SideBar.css";
import CurrentUserContext from "../contexts/CurrentUserContext";

function SideBar({ isOpen, logOut }) {
  const data = useContext(CurrentUserContext);
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar__container">
          <img src={data?.avatar} className="sidebar__avatar" alt="avatar" />
          <div className="sidebar__name">{data?.name || "Not Logged In"}</div>
        </div>
        <div className="sidebar__buttons">
          <button className="sidebar__user" onClick={isOpen}>
            Change profile data
          </button>
          <button className="sidebar__logout" onClick={logOut}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
