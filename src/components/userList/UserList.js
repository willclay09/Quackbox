import React from "react";
import { userIsAuthenticated } from "../../redux/HOCs";
import "./UserList.css";
import { Card, Form } from "react-bootstrap";

function UserList(props) {
  const defaultImageURL = "images/cancel.png";

  const addDefaultSrc = (e) => {
    e.target.src = defaultImageURL;
  };

  const users =
    props.users.length > 0
      ? props.users
      : new Array(props.perPageCount).fill({});

  console.log({ users });

  return (
    <div className="float-left">
      {users.map((user, index) => (
        <Form key={user.username || index} className="UserFlex">
          <Form.Text className="UserText">
            <div className="GetUser">
              <div className="UserCard">
                <div className="userPhoto">
                  <img
                    onError={addDefaultSrc}
                    src={`https://socialapp-api.herokuapp.com/users/${user.username}/picture`}
                    alt="user"
                  />
                </div>

                <Card.Body>
                  <Card.Title>{user.displayName || "Display Name"}</Card.Title>
                  <Card.Subtitle>{user.username || "username"}</Card.Subtitle>
                  <Card.Text className="UserCardAbout">{user.about}</Card.Text>
                </Card.Body>
              </div>
            </div>
          </Form.Text>
        </Form>
      ))}
    </div>
  );
}

export default userIsAuthenticated(UserList);
