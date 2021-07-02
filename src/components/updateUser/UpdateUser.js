import React from "react";
import { Button, Form } from "react-bootstrap";
import DataService from "../../dataService";
import UpdateUserService from "../../UpdateUserService";
import { userIsAuthenticated } from "../../redux/HOCs";
import "./UpdateUser.css";
import Modal from "react-bootstrap/Modal";

class UpdateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      password: "",
      about: "",
      displayName: "",
    };
    this.client = new DataService();
    this.UpdateUserService = new UpdateUserService();
  }
  componentDidMount() {
    this.getUserInfo();
  }
  getUserInfo = () => {
    this.client.getCurrentUser().then((result) => {
      // console.log(result);
      this.setState({
        displayName: result.data.user.displayName,
        about: result.data.user.about,
      });
    });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleUpdateUserInfo = (event) => {
    event.preventDefault();
    const updateData = {
      about: this.state.about,
      displayName: this.state.displayName,
    };
    this.UpdateUserService.updateInfo(updateData)
      .then((result) => {
        // console.log(result);
      })
      .catch((error) => console.log(error));
    this.setState({ submitted: true });
  };
  handlePasswordUserInfo = (event) => {
    event.preventDefault();
    const updatePassword = {
      password: this.state.password,
    };
    this.UpdateUserService.updateInfo(updatePassword)
      .then((result) => {
        // console.log(result);
      })
      .catch((error) => console.log(error));
    this.setState({ submitted: true });
  };

  handleReset = (event) => {
    this.setState({
      submitted: false,
      about: "",
      displayName: "",
      password: "",
    });
    this.getUserInfo();
  };

  render() {
    if (this.state.submitted) {
      return (
        <div className="UpdateUser">
          <h3>Thank You for Updating Your User Information!</h3>
          <br />
          <Button onClick={this.handleReset}>Reset Form</Button>
        </div>
      );
    }

    return (
      <div className="UpdateUser">
        <Form onSubmit={this.handleUpdateUserInfo}>
          <Modal.Dialog className="Dialog">
            <Modal.Header className="Update">
              <h3 className="Title">Update User</h3>
              <Modal.Title>
                <img
                  className="Avatar3"
                  src="https://th.bing.com/th/id/OIP.F149byFzaScS-qh5RVI3rQHaH_?pid=Api&rs=1"
                  alt="Icon"
                ></img>
              </Modal.Title>
            </Modal.Header>

            <Modal.Body className="Update" color="blue">
              <Form.Group>
                <Form.Label size="large">Change display name:</Form.Label>
                <Form.Control
                  className="form-control1"
                  type="text"
                  name="displayName"
                  value={this.state.displayName}
                  onChange={this.handleChange}
                  minLength="3"
                  maxLength="20"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label size="large" color="blue">
                  Update your "about me":
                </Form.Label>
                <Form.Control
                  className="form-control1"
                  as="textarea"
                  name="about"
                  value={this.state.about}
                  onChange={this.handleChange}
                  maxLength="255"
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer className="Update">
              <Button
                className="Button"
                onSubmit={this.handleUpdateUserInfo}
                type="submit"
              >
                Save changes
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Form>
        <Form onSubmit={this.handlePasswordUserInfo}>
          <Modal.Dialog className="Dialog">
            <Modal.Body className="Update">
              <Form.Group>
                <Form.Label size="large" color="blue">
                  New password:
                </Form.Label>
                <Form.Control
                  className="form-control1"
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  minLength="3"
                  maxLength="20"
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer className="Update">
              <Button onSubmit={this.handlePasswordUserInfo} type="submit">
                Submit
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Form>
      </div>
    );
  }
}

export default userIsAuthenticated(UpdateUser);
