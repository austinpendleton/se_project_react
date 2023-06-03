import React from "react";
import headerAvatar from "../images/avatar-wtwr.svg";
import "../blocks/SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <img src={headerAvatar} className="sidebar__avatar" alt="avatar" />
        <div className="sidebar__name">Austin Pendleton</div>
      </div>
    </div>
  );
};

export default SideBar;
