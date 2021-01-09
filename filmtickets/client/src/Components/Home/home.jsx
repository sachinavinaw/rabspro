import React, { Component } from "react";
import MainCarosel from "../Carousel/MainCarousel";
import Navbar from "../Navbar/Navbar";

export default class Home extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Navbar user={this.props.user} setUser={this.props.setUser} />
        <MainCarosel />
      </React.Fragment>
    );
  }
}
