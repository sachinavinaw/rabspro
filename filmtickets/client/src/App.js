import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./Components/Login/login";
import Home from "./Components/Home/home";
import axios from "axios";
class App extends Component {
  state = {};
  componentDidMount = () => {
    axios
      .get("/users/findOne")
      .then((res) => {
        console.log(res.data);
        this.setUser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  setUser = (user) => {
    this.setState({
      user: user,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Home user={this.state.user} setUser={this.setUser} />
              )}
            />
            <Route
              exact
              path="/login"
              component={() => <Login setUser={this.setUser} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
