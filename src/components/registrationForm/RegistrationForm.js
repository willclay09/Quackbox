import React, { Component } from "react";
import Spinner from "react-spinkit";
import "./RegistrationForm.css";
import DataService from "../../dataService";
import { Button, Form, Card, Badge } from "react-bootstrap";

// import DataServiceV2 from "../../dataServiceV2";

// const clientV2 = new DataServiceV2();

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      responseCode: null,
      formData: {
        username: "",
        password: "",
        displayName: "",
      },
    };

    this.client = new DataService();
  }

  // componentDidMount() {
  //   clientV2
  //     .getUsers()
  //     .then((res) => {
  //       const users = res.data.response;
  //       console.log(users);
  //     })
  //     .catch((error) => console.error(error));
  // }

  handleRegistration = (e) => {
    e.preventDefault();
    // console.log(this.client);
    this.client.getUsers(this.state.formData).then((result) => {
      // console.log(result.data);
    });

    this.client
      .registerUser(this.state.formData)
      .then((result) => {
        // console.log(result.data);
        this.setState({
          responseCode: 200,
          formData: { username: "", displayName: "", password: "" },
          submitted: true,
        });
      })
      .catch((error) => {
        // console.dir(error);
        if (error.response.data.statusCode === 400) {
          this.setState({
            responseCode: 400,
            submitted: true,
          });
        }
      });
  };
  handleChange = (e) => {
    const formData = { ...this.state.formData };
    formData[e.target.name] = e.target.value;
    this.setState({ formData: formData });
  };

  handleReset = (e) => {
    e.preventDefault();
    this.setState({
      submitted: false,
      formData: { username: "", password: "", displayName: "" },
    });
  };

  render() {
    const { loading, error } = this.props;

    if (this.state.responseCode === 200 && this.state.submitted) {
      return (
        <div className="RegistrationForm">
          <Card className="RegisterMessage">
            <Card.Body>
              <Card.Text>
                <h3>
                  <Badge variant="warning">
                    You have Created an Account Successfully!
                  </Badge>
                </h3>
              </Card.Text>
              <Button onClick={this.handleReset}>Reset</Button>
            </Card.Body>
          </Card>
        </div>
      );
    } else if (this.state.responseCode === 400 && this.state.submitted) {
      return (
        <div className="RegistrationForm">
          <Card className="RegisterMessage">
            <Card.Body>
              <Card.Text>
                <h3>
                  <Badge variant="warning">
                    Please Try A Different Username!
                  </Badge>
                </h3>
              </Card.Text>
              <Button onClick={this.handleReset}>Reset</Button>
            </Card.Body>
          </Card>
        </div>
      );
    } else {
      return (
        <div className="RegistrationForm">
          <h3>Register User</h3>
          <Form id="registration-form" onSubmit={this.handleRegistration}>
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={this.state.formData.username}
              autoFocus
              required
              onChange={this.handleChange}
            />
            <Form.Label htmlFor="displayName">Display Name</Form.Label>
            <Form.Control
              type="text"
              name="displayName"
              value={this.state.formData.displayName}
              required
              onChange={this.handleChange}
            />
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={this.state.formData.password}
              required
              onChange={this.handleChange}
            />
            <Button
              variant="primary"
              className="Register"
              type="submit"
              disabled={loading}
            >
              Submit
            </Button>
          </Form>
          {loading && <Spinner name="circle" color="blue" />}
          {error && <p style={{ color: "red" }}>{error.message}</p>}
        </div>
      );
    }
  }
}

export default RegistrationForm;
