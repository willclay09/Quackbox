import React from "react";
import { userIsAuthenticated } from "../../redux/HOCs";
import "./UserList.css";
import Card from "react-bootstrap/Card";
import { Form } from "react-bootstrap";

function UserList(props) {
  const defaultImageURL =
    "https://4.bp.blogspot.com/-dVXMbj_Ss-A/T59WMcO9mCI/AAAAAAAAAgw/R2rF28Xz9Aw/s1600/No+waddling.jpg";

  const addDefaultSrc = (e) => {
    e.target.src = defaultImageURL;
  };

  const { loading, error, users } = props;
  console.log({ users });

  if (props.users.length > 0) {
    return (
      <div className="float-left">
        <div className="hide">{JSON.stringify(props)}</div>
        {props.users.map((user) => (
          <Form className="UserFlex">
            <Form.Text className="UserText">
              <div key={user.username} className="GetUser">
                <div className="UserCard">
                  <div className="userPhoto">
                    <img
                      onError={addDefaultSrc}
                      src={`https://socialapp-api.herokuapp.com/users/${user.username}/picture`}
                      alt="user "
                    />
                  </div>

                  <Card.Body>
                    <Card.Text>
                      <h6>Username</h6>
                      {user.username}
                    </Card.Text>
                    <Card.Text>
                      <h6>DisplayName</h6>
                      {user.displayName}
                    </Card.Text>
                    <Card.Text>
                      <h6>About</h6>
                      {user.about}
                    </Card.Text>
                  </Card.Body>
                </div>
              </div>
            </Form.Text>
          </Form>
        ))}
      </div>
    );
  } else {
    return new Array(props.perPageCount).fill(null).map((_, index) => (
      <div key={index} className="GetUser">
        <Card className="UserCard">
          <img className="userPhoto" src={defaultImageURL} alt="user " />
          <Card.Body>
            <Card.Text>
              <h6>Username</h6>
              Your Username Here
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Text>
              <h6>DisplayName</h6>
              Your Display Name Here
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Text>
              <h6>About</h6>
              Your About Here
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    ));
  }
}

export default userIsAuthenticated(UserList);
