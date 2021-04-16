import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import { Row, Col } from "react-bootstrap";
import "./Connections.css";
import UserMessages from "../components/userMessages/UserMessages";
import ScrollUpButton from "react-scroll-up-button";
import UserPagination from "../components/userPagination/UserPagination";

class Connections extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Users">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <Row>
          <ScrollUpButton />
          <Col>
            <UserMessages />
          </Col>
          <Col>
            <h1>Users</h1>

            <UserPagination />
          </Col>
        </Row>
      </div>
    );
  }
}

export default userIsAuthenticated(Connections);
