import React, { Component } from "react";
import "../../assets/css/theme.css";
import logoImage from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
class Navbar extends Component {
  handleLogOut = () => {
    localStorage.removeItem("token");
    this.props.setUser(null);
  };
  render() {
    let tag;

    if (this.props.user) {
      tag = (
        <Link
          to={"/"}
          onClick={this.handleLogOut}
          className="header-button pull-right"
        >
          Logout
        </Link>
      );
    } else {
      tag = (
        <Link to={"/login"} className="header-button pull-right">
          Login
        </Link>
      );
    }
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-theme-dark">
          <div className="container">
            <a className="navbar-brand">
              <img src={logoImage} />
            </a>
            <form className="search-form">
              <input
                type="text"
                placeholder="Search for Movies, Offers, etc.."
              />
              <button type="submit">Search</button>
            </form>
            {tag}
          </div>
        </nav>
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-theme">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="container">
            <div
              className="collapse navbar-collapse text-center"
              id="navbarTogglerDemo03"
            >
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Movies</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Generes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Bollywood</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Hollywood</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Regional</a>
                </li>
              </ul>

              <a className="nav-link-right pull-right">offers</a>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
