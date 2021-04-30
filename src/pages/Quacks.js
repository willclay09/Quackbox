import React from "react";
import Menu from "../components/menu/Menu";
import Join from "../components/join/Join";
import { userIsAuthenticated } from "../redux/HOCs";
import { Row, Col } from "react-bootstrap";
import Search from "../components/search/Search";
import ScrollUpButton from "react-scroll-up-button";

class Quacks extends React.Component {
  render() {
    return (
      <div>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <Row>
          <Col>
            <Join />
          </Col>
          <Col>
            <ScrollUpButton />
            <Search />
          </Col>
        </Row>
      </div>
    );
  }
}

export default userIsAuthenticated(Quacks);
