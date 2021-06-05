import React from "react";
import "./InfoBar.css";
import { userIsAuthenticated } from "../../redux/HOCs";

import { Form } from "react-bootstrap";

function InfoBar({ room }) {
  return (
    <Form>
      <div className="infoBar">
        <div className="leftInnerContainer">
          <img
            className="onlineIcon"
            src="images/onlineIcon.png"
            alt="online"
          />
          <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
          <a href="../Quacks">
            <img className="closeIcon" src="images/closeIcon.png" alt="close" />
          </a>
        </div>
      </div>
    </Form>
  );
}
// from Adrian Hajdin - JavaScript Mastery https://github.com/adrianhajdin/project_chat_application
export default userIsAuthenticated(InfoBar);
