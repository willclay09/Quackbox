import React from "react";
import Menu from "../components/menu/Menu";
import { Link } from "react-router-dom";
import { userIsNotAuthenticated } from "../redux/HOCs";
import RegistrationForm from "../components/registrationForm/RegistrationForm";
import "./CreateUser.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

class CreateUser extends React.Component {
  render() {
    return (
      <div className="NewUser">
        <Menu />
        <Row>
          <Col>
            <RegistrationForm />
          </Col>
          <Col>
            <h1 className="User">Create User</h1>
            <Image
              className="Fluid"
              src="/images/debugging.png"
              roundedCircle
            />
          </Col>
          <Col>
            <Link to="/">
              <h3 className="Home2">Go Home</h3>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default userIsNotAuthenticated(CreateUser);
