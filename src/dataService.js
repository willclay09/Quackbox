//import the axios HTTP client to communicate with the API
import axios from "axios";
import {
  handleJsonResponse,
  jsonHeaders,
} from "./redux/actionCreators/constants";
import { store } from "./redux";

// const { username, token } = store.getState().auth.login.result;
// const ENV = process.env.NODE_ENV || "dev";
// const endpoint =
//   ENV === "prod"
//     ? "https://socialapp-api.herokuapp.com"
//     : "https://localhost:3001";

class DataService {
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }

  makeMessage(messageData) {
    console.log(this.url);
    const logIn = JSON.parse(localStorage.getItem("login"));
    fetch(this.url + "/messages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${logIn.result.token}`,
        ...jsonHeaders,
      },
      body: JSON.stringify(messageData),
    })
      .then(handleJsonResponse)
      .then((result) => {
        console.log(result);
        return result;
      });
  }
  getUserName() {
    const { username } = store.getState().auth.login.result;
    return username;
  }
  getToken() {
    const { token } = store.getState().auth.login.result;
    return token;
  }
  registerUser(registrationData) {
    return this.client.post(this.url + "/users", registrationData);
  }
  getUserPhoto() {
    return this.client.get(this.url + `/users/${this.getUserName()}/picture`);
  }
  messageLike(messageId) {
    return this.client.post(
      this.url + "/likes",
      { messageId: messageId },
      {
        headers: {
          Authorization: `Bearer ${(this.getUserName(), this.getToken())}`,
        },
      }
    );
  }
  deleteLikes(likeId) {
    const LikesURL = this.url + `/likes/${likeId}`;
    const config = {
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
    };
    return this.client.delete(LikesURL, config);
  }

  getUserPicture(userData) {
    return this.client.get(this.url + "/users/" + userData + "/picture");
  }
  userPicture(formData) {
    const imageURL = this.url + `/users/${this.getUserName()}/picture`;
    const config = {
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
    };
    return this.client.put(imageURL, formData, config);
  }
  mostLikedMessages(limit = 10) {
    return this.client.get(this.url + `/messages/?limit=${limit}`);
  }

  getUsers() {
    return this.client.get(this.url + "/users");
  }
  getAllUsers({ limit = 2500, offset = 0 } = {}) {
    const UsersURL = this.url + `/users?limit=${limit}&offset=${offset}`;
    const config = {
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
    };
    return this.client.get(UsersURL, config);
  }
  getCurrentUser() {
    const UserURL = this.url + `/users/${this.getUserName()}`;
    const config = {
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
    };
    return this.client.get(UserURL, config);
  }
  deleteUsers() {
    const deleteURL = this.url + `/users/${this.getUserName()}`;
    const config = {
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
    };
    return this.client.delete(deleteURL, config);
  }
  deleteMessage(messageId) {
    const deleteQuack = this.url + `/messages/${messageId}`;
    const config = {
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
    };
    return this.client.delete(deleteQuack, config);
  }
  getMessage(limit = 100) {
    return this.client.get(this.url + `/messages?limit=${limit}`);
  }

  getUserMessage(limit = 100) {
    return this.client.get(
      this.url + `/messages?username=${this.getUserName()}?limit=${limit}`
    );
  }
}
export default DataService;
