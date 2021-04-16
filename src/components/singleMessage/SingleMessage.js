import React from "react";
import "./SingleMessage.css";
import ReactEmoji from "react-emoji";
import { userIsAuthenticated } from "../../redux/HOCs";

function SingleMessage({ message: { user, text }, name }) {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText">{trimmedName}</p>

      <div className="messageBox">
        <p className="messageText">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className=" messageContainer justifyStart">
      <div className="messageBox">
        <p className="messageText">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="sentText">{user}</p>
    </div>
  );
}
// from Adrian Hajdin - JavaScript Mastery https://github.com/adrianhajdin/project_chat_application
export default userIsAuthenticated(SingleMessage);
