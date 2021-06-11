import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import SetPicture from "../components/setPicture/SetPicture";
import { Row, Col } from "react-bootstrap";
import "./Profile.css";
import UpdateUser from "../components/updateUser/UpdateUser";
import DeleteUser from "../components/deleteUser/DeleteUser";

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />

        <Row>
          <Col>
            <SetPicture />
          </Col>
          <Col>
            <h3>Profile</h3>
            <UpdateUser />
            <DeleteUser />
          </Col>
        </Row>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
