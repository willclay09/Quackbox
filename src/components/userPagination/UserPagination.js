import React from "react";
import { userIsAuthenticated } from "../../redux/HOCs";
import UserList from "../userList/UserList";
import Pagination from "react-bootstrap/Pagination";
import DataService from "../../dataService";
import "./UserPagination.css";

class UserPagination extends React.Component {
  constructor(props) {
    super(props);

    this.perPageCount = 12;

    this.state = {
      count: 0,
      active: 1,
      users: [],
    };
    this.client = new DataService();
  }
  componentDidMount() {
    this.updateUsers();
  }

  updateUsers = () => {
    let limit = this.perPageCount;
    let offset = this.perPageCount * (this.state.active - 1);

    this.client.getAllUsers({ limit, offset }).then((payload) => {
      console.log({ payload });
      let { users, count } = payload.data;

      if (payload.data.statusCode === 200) {
        this.setState({ users, count });
      } else {
        console.log(payload);
        // set user list to empty2
        this.setState({
          users: [],
        });
      }
    });
  };
  next = () => {
    if (this.perPageCount * this.state.active < this.state.count) {
      this.setState(
        (state) => ({ active: state.active + 1 }),
        this.updateUsers
      );
    }
  };

  prev = () => {
    if (this.state.active > 1) {
      this.setState(
        (state) => ({ active: state.active - 1 }),
        this.updateUsers
      );
    }
  };

  first = () => {
    this.setState({ active: 1 }, this.updateUsers);
  };

  last = () => {
    this.setState(
      (state) => ({ active: Math.ceil(state.count / this.perPageCount) }),
      this.updateUsers
    );
  };

  render() {
    return (
      <div className="PaginationUser">
        <UserList users={this.state.users} perPageCount={this.perPageCount} />
        <div className="float-left">
          <div className="Centered">
            <Pagination size="lg">
              <Pagination.First
                onClick={this.first}
                disabled={this.state.active === 1}
              />
              <Pagination.Prev
                onClick={this.prev}
                disabled={this.state.active === 1}
              />
              <Pagination.Item active>{this.state.active}</Pagination.Item>
              <Pagination.Next
                onClick={this.next}
                disabled={
                  this.perPageCount * this.state.active > this.state.count
                }
              />
              <Pagination.Last
                onClick={this.last}
                disabled={
                  this.state.active ===
                  Math.ceil(this.state.count / this.perPageCount)
                }
              />
            </Pagination>
          </div>
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(UserPagination);
