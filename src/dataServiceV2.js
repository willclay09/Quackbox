import axios from "axios";
import {
  handleJsonResponse,
  jsonHeaders,
} from "./redux/actionCreators/constants";
import { store } from "./redux";

// const { username, token } = store.getState().auth.login.result;

export default class DataServiceV2 {
  constructor(url = "http://localhost:3001", client = axios.create()) {
    this.url = url;
    this.client = client;
  }

  getUsers() {
    return this.client.get("http://localhost:3001/api/users");
  }
}
export default class DataServiceV2 {
  constructor(url = "https://quackbox-backend.herokuapp.com/", client = axios.create()) {
    this.url = url;
    this.client = client;
  }

  getUsers() {
    return this.client.get("https://quackbox-backend.herokuapp.com/api/users");
  }
}