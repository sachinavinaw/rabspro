import "./App.css";
import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
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
        <div className="App">
          <Switch>
            <Switch>
              <Route
                exact
                path="/home"
                component={() => (
                  <Home user={this.state.user} setUser={this.setUser} />
                )}
              />
              <Route
                exact
                path="/"
                component={() => <Login setUser={this.setUser} />}
              />
              {/* <Route exact path="/register" component={SignUp} /> */}
            </Switch>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
