import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { io } from "socket.io-client";
import { userIsAuthenticated } from "../../redux/HOCs";
import "./InstaQuack.css";
import InfoBar from "../infobar/InfoBar";
import Input from "../input/Input";
import AllMessages from "../allMessages/AllMessages";
import TextContainer from "../textContainer/TextContainer";
import { Form } from "react-bootstrap";

const ENDPOINT = window.location.href.includes(
  "https://quackbox-backend.herokuapp.com/"
)
  ? "http://localhost:3001"
  : "https://quackbox-backend.herokuapp.com/";

const socket = io(ENDPOINT, {
  transports: ["websocket", "polling"],
});
socket.on("connect_error", () => {
  // revert to classic upgrade
  socket.io.opts.transports = ["polling", "websocket"];
});

function InstaQuack({ location }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  // console.log(message, messages);

  return (
    <Form>
      <div className="outerContainer">
        <div className="container">
          <InfoBar room={room} />
          <AllMessages messages={messages} name={name} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>

        <TextContainer users={users} />
      </div>
    </Form>
  );
}
// from Adrian Hajdin - JavaScript Mastery https://github.com/adrianhajdin/project_chat_application
export default userIsAuthenticated(InstaQuack);
