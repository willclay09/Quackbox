import React from "react";
import { userIsAuthenticated } from "../../redux/HOCs";
import { Form, Button } from "react-bootstrap";
import DataService from "../../dataService";
import UserList from "../userList/UserList";

const client = new DataService();

class Search extends React.Component {
  constructor(props, searchTerm, searchArray) {
    super(props);
    this.state = {
      allUsers: [],
      filteredUsers: [],
      loading: true,
    };
  }

  componentDidMount() {
    client.getAllUsers().then((body) => {
      this.setState({
        allUsers: body?.data?.users, // optional chaining operator
        loading: false,
      });
    });
  }

  searchAllUsers = (event) => {
    event.preventDefault();
    const searchTerm = event.target.searchterm.value.toLowerCase();
    const filteredUsers = this.state.allUsers.filter((user) => {
      const username = user.username?.toLowerCase();
      const displayName = user.displayName?.toLowerCase();
      return username.includes(searchTerm) || displayName.includes(searchTerm);
    });

    this.setState({ filteredUsers }, () => console.log({ filteredUsers }));
  };

  render() {
    return (
      <div>
        <h3>Username or DisplaynameSearch</h3>
        <Form onSubmit={this.searchAllUsers}>
          <Form.Label htmlFor="inlineFormInputGroupUsername" srOnly>
            Username or DisplayName Search
          </Form.Label>
          <Form.Control type="text" name="searchterm"></Form.Control>

          <Button type="submit" disabled={this.state.loading}>
            Search
          </Button>
        </Form>

        <UserList users={this.state.filteredUsers} />
      </div>
    );
  }
}

export default userIsAuthenticated(Search);
