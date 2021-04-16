import React from "react";
import Spinner from "react-spinkit";
import { userIsAuthenticated } from "../../redux/HOCs";
import "./CreateMessage.css";
import DataService from "../../dataService";
import Picker from "emoji-picker-react";
import { Button, Form } from "react-bootstrap";

class CreateMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.client = new DataService();
  }
  onEmojiClick = (event, emojiObject) => {
    this.setState(
      (state) => ({ text: state.text + emojiObject.emoji }),
      () => this.inputElement.focus()
    );
  };

  handleMessage = (e) => {
    e.preventDefault();

    this.client.makeMessage(this.state);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleReset = (event) => {
    this.setState({
      text: "",
    });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="MessageForm">
        <Form id="message-form" onSubmit={this.handleMessage}>
          <Form.Label htmlFor="message">
            <h3>Create Quacks</h3>
          </Form.Label>
          <Form.Control
            type="text"
            name="text"
            autoFocus
            required
            onChange={this.handleChange}
            value={this.state.text}
            ref={(element) => (this.inputElement = element)}
          />
          <Button
            variant="primary"
            className="CreateQuack"
            type="submit"
            disabled={loading}
          >
            Submit
          </Button>
        </Form>

        <Button
          variant="secondary"
          className="ResetQuack"
          onClick={this.handleReset}
        >
          Reset
        </Button>
        <Picker onEmojiClick={this.onEmojiClick} />
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default userIsAuthenticated(CreateMessage);
