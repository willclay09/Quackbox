import React from "react";
import "./Input.css";
import { userIsAuthenticated } from "../../redux/HOCs";
import { Form, Button, Col } from "react-bootstrap";
import Picker from "emoji-picker-react";

function Input({ props, onEmojiClick2, message, setMessage, sendMessage }) {
  onEmojiClick2 = (event, emojiObject) => {
    props.setState(
      (props) => ({ message: props.payload.data + emojiObject.emoji }),

      (props) => props.inputElement.focus()
    );
  };
  console.log(props);
  return (
    <div>
      <Form className="form">
        <Form.Control
          className="input"
          type="text"
          placeholder="Type a message..."
          value={message}
          // ref={(element) => (props.inputElement = element)}
          onChange={({ target: { value } }) => setMessage(value)}
          onKeyPress={(event) =>
            event.key === "Enter" ? sendMessage(event) : null
          }
        ></Form.Control>
        <Button className="sendButton" onClick={(event) => sendMessage(event)}>
          Send
        </Button>
      </Form>
      <Col>
        <div>
          <Picker className="picker" onEmojiClick2={onEmojiClick2} />
        </div>
      </Col>
    </div>
  );
}
// from Adrian Hajdin - JavaScript Mastery https://github.com/adrianhajdin/project_chat_application
export default userIsAuthenticated(Input);
