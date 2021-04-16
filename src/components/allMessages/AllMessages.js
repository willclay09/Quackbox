import React from "react";

import ScrollToBottom from "react-scroll-to-bottom";

import SingleMessage from "../singleMessage/SingleMessage";

import "./AllMessages.css";

const AllMessages = ({ messages, name }) => (
  <ScrollToBottom className="messages">
    {messages.map((message, i) => (
      <div key={i}>
        <SingleMessage message={message} name={name} />
      </div>
    ))}
  </ScrollToBottom>
);
// from Adrian Hajdin - JavaScript Mastery https://github.com/adrianhajdin/project_chat_application
export default AllMessages;
