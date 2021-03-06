import React from "react";
import { userIsAuthenticated } from "../../redux/HOCs";
import "./UserMessages.css";
import DataService from "../../dataService";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

class UserMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          id: null,
          text: "",
          username: "",
          createdAt: "",
          likes: [
            {
              id: null,
              username: "",
              messageId: null,
              createdAt: "",
            },
          ],
        },
      ],
    };

    this.client = new DataService();
  }

  componentDidMount() {
    this.getListOfMessages();
  }

  getListOfMessages() {
    return this.client.getUserMessage().then((result) => {
      // console.log(result);
      this.setState({
        messages: result.data.messages,
      });
      setTimeout(() => {
        this.getListOfMessages();
      }, 10000);
    });
  }

  deleteUsersMessage(messageId) {
    return this.client.deleteMessage(messageId).then((result) => {
      // console.log(result);
      this.getListOfMessages();
    });
  }

  render() {
    const noMessages =
      this.state.messages.length === 0 ? (
        <img
          className="Quackless"
          src="images/nothing-to-quack-about.png"
          alt="No Quacks "
        />
      ) : undefined;

    return (
      <div className="pageWrap">
        <h3>Users Quacks</h3>
        <InputGroup>
          <Form.Group>
            <div className="Menu"></div>
            <div className="MessageList">
              {noMessages}
              {this.state.messages.map((message) => (
                <div key={message.id} className="MessageWrap">
                  <div className="UserName">User Name: {message.username}</div>
                  <img
                    className="Avatar3"
                    src="/images/rubber-duck.jpg"
                    alt="Icon"
                  ></img>
                  <div className="MessageText">Message: {message.text}</div>

                  <div>
                    <Button
                      className="DeleteButton"
                      onClick={() => {
                        this.deleteUsersMessage(message.id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2rem"
                        height="2rem"
                        fill="currentColor"
                        className="bi bi-emoji-frown-fill"
                        viewBox="0 0 16 16"
                        color="yellow"
                      >
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />
                      </svg>
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Form.Group>
        </InputGroup>
      </div>
    );
  }
}

export default userIsAuthenticated(UserMessages);
