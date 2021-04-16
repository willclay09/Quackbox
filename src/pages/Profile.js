import React from "react";
import Menu from "../components/menu/Menu";
import SetPicture from "../components/setPicture/SetPicture";
import { userIsAuthenticated } from "../redux/HOCs";
import UpdateUser from "../components/updateUser/UpdateUser";
import "./Profile.css";
import { Row, Col } from "react-bootstrap";
import DeleteUser from "../components/deleteUser/DeleteUser";
import LikedMessages from "../components/likedMessages/LikedMessages";

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
            <h1>Profile</h1>
            <UpdateUser />
            <DeleteUser />
          </Col>
          <Col>
            <div className="Liked1">
              <LikedMessages />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
