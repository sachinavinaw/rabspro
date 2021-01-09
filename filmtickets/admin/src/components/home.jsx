import React, { Component } from "react";
import "./home.css";
import Navbar from "./navbar";
import { Redirect } from "react-router-dom";
class Home extends Component {
  state = {};
  render() {
    if (!this.props.user) {
      return <Redirect to={"/"} />;
    }
    return (
      <React.Fragment>
        <Navbar user={this.props.user} setUser={this.props.setUser} />
        <h1>Home Component</h1>
      </React.Fragment>
    );
  }
}

export default Home;
