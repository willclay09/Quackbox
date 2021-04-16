import React from "react";
import CreateMessage from "../components/createMessage/CreateMessage";
import Menu from "../components/menu/Menu";
import MessageList from "../components/messageList/MessageList";
import { userIsAuthenticated } from "../redux/HOCs";
import LikedMessages from "../components/likedMessages/LikedMessages";
import { Row, Col } from "react-bootstrap";
import "./Messages.css";
import ScrollUpButton from "react-scroll-up-button";

class MessageFeed extends React.Component {
  render() {
    return (
      <div className="Message">
        <Menu isAuthenticated={this.props.isAuthenticated} />

        <Row>
          <ScrollUpButton />
          <Col>
            <CreateMessage />
          </Col>
          <Col>
            <MessageList />
          </Col>
          <Col>
            <LikedMessages />
          </Col>
        </Row>
      </div>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
