import React, { Component } from "react";
import logoImage from "../assets/images/logo.png";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
class TopNavbar extends Component {
  state = {
    loggedUserName: "Hi",
  };
  handleLogOut = () => {
    localStorage.removeItem("token");
    return <Redirect to={"/"} />;
  };
  componentDidMount = () => {
    this.setState({
      loggedUserName: `Hi, User!`,
    });
  };
  render() {
    return (
      <Navbar bg="dark" expand="lg" fixed="top">
        <Navbar.Brand href="#home">
          <img src={logoImage} alt="adminPanel" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}

            <NavDropdown
              title={this.state.loggedUserName}
              id="basic-nav-dropdown"
              alignRight
            >
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Notification
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Help</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="/"
                onClick={() => {
                  this.handleLogOut();
                }}
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopNavbar;
