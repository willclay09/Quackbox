import React from "react";
import "./InfoBar.css";
import { userIsAuthenticated } from "../../redux/HOCs";
import closeIcon from "../icons/closeIcon.png";
import onLineIcon from "../icons/onlineIcon.png";

function InfoBar({ room }) {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onLineIcon} alt="online" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="../Quacks">
          <img className="closeIcon" src={closeIcon} alt="close" />
        </a>
      </div>
    </div>
  );
}
// from Adrian Hajdin - JavaScript Mastery https://github.com/adrianhajdin/project_chat_application
export default userIsAuthenticated(InfoBar);
