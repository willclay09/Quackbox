import React from "react";
import { userIsAuthenticated } from "../../redux/HOCs";
import "../likedMessages/LikedMessages.css";
import DataService from "../../dataService";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

class LikedMessages extends React.Component {
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
    this.getListOfLikedMessages();
  }

  getListOfLikedMessages() {
    return this.client.mostLikedMessages().then((messages) => {
      console.log({ messages });
      this.setState({ messages });
      // this.getListOfMessages();
    });
  }

  render() {
    return (
      <div className="pageWrap">
        <h3>Most Liked Quacks</h3>
        <InputGroup>
          <Form>
            <Form.Group>
              <Form.Row>
                <Form.Label>
                  <Form.Text>
                    <div className="Menu"></div>

                    <div className="MessageList">
                      {this.state.messages.map((message) => (
                        <div key={message.id} className="MessageWrap">
                          <div className="UserName">
                            User Name: {message.username}
                          </div>
                          <img
                            className="Avatar2"
                            src="/images/duck-icon.png"
                            alt="Icon"
                          ></img>
                          <div className="MessageText">
                            Message: {message.text}
                          </div>

                          <div className="LikeWrap">
                            <div className="LikesTitle">
                              Likes: {message.likes.length}
                            </div>
                            {message.likes.map((like) => (
                              <div
                                key={like.id}
                                id="LikeUsers"
                                className="LikesUserName"
                              >
                                {like.username}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Form.Text>
                </Form.Label>
              </Form.Row>
            </Form.Group>
          </Form>
        </InputGroup>
      </div>
    );
  }
}

export default userIsAuthenticated(LikedMessages);
