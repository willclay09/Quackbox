import React from "react";
import { userIsAuthenticated } from "../../redux/HOCs";
import "../deleteUser/DeleteUser.css";
import DataService from "../../dataService";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";

let client = new DataService();
function DeleteUser(props, handleDelete) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  handleDelete = (props) => {
    client.deleteUsers(props).then(() => {
      console.log("hi");
      props.setState({
        username: props.data.username,
      });
    });
    window.localStorage.removeItem("login");
    window.location.reload();
  };
  return (
    <div className="DeleteUser">
      <div>
        <h3>Delete User</h3>
        <Button variant="danger" onClick={handleShow}>
          Delete
        </Button>

        <Modal className="ModalSize" show={show}>
          <Modal.Header className="Update">
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body className="Update">
            {" "}
            <h1>Thanks for Visiting</h1>
            <h3> As always Keep on Quackin!</h3>
          </Modal.Body>
          <Modal.Footer className="Update">
            <Button variant="danger" onClick={handleDelete}>
              YES
            </Button>
            <Button variant="primary" onClick={handleClose}>
              NO
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default userIsAuthenticated(DeleteUser);
