import React from "react";
import "../../assets/css/theme.css";

function Navbar() {
  return (
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
  );
}

export default Navbar;
