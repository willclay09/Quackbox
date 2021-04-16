import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { Link } from "react-router-dom";
import { userIsNotAuthenticated } from "../redux/HOCs";
import "./Home.css";
import { Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <Row>
          <Col>
            <h2 className="Login">Login</h2>
            <LoginForm />
          </Col>
          <Col>
            <h2 className="Squeaky">Keep It Squeaky Clean</h2>
            <Image
              src="https://funixx.files.wordpress.com/2015/11/tumblr_n70ml7ecgq1rhavdko1_500.png"
              thumbnail
            />
          </Col>
          <Col>
            <Link to="/CreateUser">
              <h3 className="Create">Create User</h3>
            </Link>
          </Col>
        </Row>
        <Col>
          {/* from:https://kentaroau.com/posts/create-a-wave-effect-in-css-and-svg/ */}
          <div class="waves">
            <div class="wave wave-dark">
              <div class="water">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 350 32"
                  preserveAspectRatio="none"
                >
                  <title>wave2</title>
                  <path d="M350,17.32V32H0V17.32C116.56,65.94,175-39.51,350,17.32Z"></path>
                </svg>
              </div>
              <div class="water">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 350 32"
                  preserveAspectRatio="none"
                >
                  <title>wave2</title>
                  <path d="M350,17.32V32H0V17.32C116.56,65.94,175-39.51,350,17.32Z"></path>
                </svg>
              </div>
            </div>
            <div class="wave wave-light">
              <div class="water">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 350 32"
                  preserveAspectRatio="none"
                >
                  <title>wave2</title>
                  <path d="M350,17.32V32H0V17.32C116.56,65.94,175-39.51,350,17.32Z"></path>
                </svg>
              </div>
              <div class="water">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 350 32"
                  preserveAspectRatio="none"
                >
                  <title>wave2</title>
                  <path d="M350,17.32V32H0V17.32C116.56,65.94,175-39.51,350,17.32Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </Col>
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
