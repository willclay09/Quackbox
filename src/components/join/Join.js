import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";
import { userIsAuthenticated } from "../../redux/HOCs";
import { Form, Button } from "react-bootstrap";

function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h3 className="heading">InstaQuack</h3>
        <div>
          <Form.Control
            placeholder="Name"
            className="joinInput"
            type="text"
            minLength="3"
            maxLength="20"
            onChange={(event) => setName(event.target.value)}
          ></Form.Control>
        </div>
        <div>
          <Form.Control
            placeholder="Room"
            className="joinInput"
            type="text"
            minLength="3"
            maxLength="20"
            onChange={(event) => setRoom(event.target.value)}
          ></Form.Control>
        </div>
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/InstaQuack?name=${name}&room=${room}`}
        >
          <Button className="button" type="submit">
            Sign In
          </Button>
        </Link>
      </div>
    </div>
  );
}
// from Adrian Hajdin - JavaScript Mastery https://github.com/adrianhajdin/project_chat_application
export default userIsAuthenticated(Join);
