import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Messages from "./pages/Messages";
import CreateUser from "./pages/CreateUser";
import Connections from "./pages/Connections";
import Picture from "./pages/Picture";
import Quacks from "./pages/Quacks";
import InstaQuack from "./components/instaQuack/InstaQuack";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile/:username" component={Profile} />
        <Route exact path="/Messages" component={Messages} />
        <Route exact path="/CreateUser" component={CreateUser} />
        <Route exact path="/Connections" component={Connections} />
        <Route exact path="/Picture" component={Picture} />
        <Route exact path="/Quacks" component={Quacks} />
        <Route exact path="/InstaQuack" component={InstaQuack} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
