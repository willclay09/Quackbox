import React from "react";
import "./Input.css";
import { userIsAuthenticated } from "../../redux/HOCs";
import { Form, Button, Col } from "react-bootstrap";
import Picker from "emoji-picker-react";
import { useState } from "react";

function Input({ message, setMessage, sendMessage }) {
  const [inputRef, setInputRef] = useState(null);

  const [pickerContainer, setPickerContainer] = useState(null);
  const displayEmojiPickerWithCSS = () => {
    const displayStates = {
      none: "block",
      block: "none",
      "": "none",
    };

    const currentDisplayState = pickerContainer.style.display;
    pickerContainer.style.display = displayStates[currentDisplayState];
  };

  const onEmojiClick = (event, emojiObject) => {
    setMessage(message + emojiObject.emoji);
    inputRef.focus();
  };

  const inputOnChange = (event) => {
    const inputElement = event.target;
    setMessage(inputElement.value);
  };

  console.log({ message });
  return (
    <div>
      <Form className="formInput">
        <Col>
          <Form.Group>
            <div className="textInputOptions">
              <div
                className="emoji-trigger"
                onClick={displayEmojiPickerWithCSS}
              >
                😎
              </div>
            </div>
          </Form.Group>
        </Col>
        <Form.Control
          className="input"
          type="text"
          placeholder="Type a message..."
          ref={setInputRef}
          value={message}
          onChange={inputOnChange}
          onKeyPress={(event) => event.key === "Enter" && sendMessage(event)}
        ></Form.Control>
        <Button className="sendButton" onClick={(event) => sendMessage(event)}>
          Send
        </Button>
      </Form>
      <Col className="picker-container" ref={setPickerContainer}>
        <Picker className="picker" onEmojiClick={onEmojiClick} />
      </Col>
    </div>
  );
}
// from Adrian Hajdin - JavaScript Mastery https://github.com/adrianhajdin/project_chat_application
export default userIsAuthenticated(Input);
