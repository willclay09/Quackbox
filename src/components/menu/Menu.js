import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../redux/HOCs";
import { store } from "../../redux";

const { username } = store.getState().auth.login?.result ?? {
  username: "user",
};

class Menu extends React.Component {
  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div className="Menu">
        <h1>
          Quackbox
          <img
            className="Avatar4"
            src="images/rubber-duck-icon.png"
            alt="Icon"
          ></img>
        </h1>

        {this.props.isAuthenticated && (
          <div id="menu-links">
            <Link to="/messages">Message Feed</Link>
            <Link to="/profile/:username">Profile</Link>
            <Link to="/connections">Connections</Link>
            <Link to="/picture">Picture</Link>
            <Link to="/quacks">Quacks</Link>
            <Link to="/" onClick={this.handleLogout}>
              Logout
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);
