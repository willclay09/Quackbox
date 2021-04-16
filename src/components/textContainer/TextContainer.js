import React from "react";
import "./TextContainer.css";
import { userIsAuthenticated } from "../../redux/HOCs";
import onLineIcon from "../icons/onlineIcon.png";

function TextContainer({ users }) {
  return (
    <div>
      <div>
        <h1>
          <span role="img" aria-label="emoji">
            ⬅️
          </span>
          Let's get Quackin!{" "}
          <span role="img" aria-label="emoji">
            💬
          </span>
        </h1>
      </div>
      {users ? (
        <div>
          <h1>People currently chatting:</h1>
          <div className="activeContainer">
            <h2>
              {users.map(({ name }) => (
                <div key={name} className="activeItem">
                  {name}
                  <img
                    className="textImage"
                    alt="Online Icon"
                    src={onLineIcon}
                  />
                </div>
              ))}
            </h2>
          </div>
        </div>
      ) : null}
    </div>
  );
}
// from Adrian Hajdin - JavaScript Mastery https://github.com/adrianhajdin/project_chat_application
export default userIsAuthenticated(TextContainer);
