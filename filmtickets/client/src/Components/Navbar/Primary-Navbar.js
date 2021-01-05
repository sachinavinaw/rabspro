import React from "react";
import "../../assets/css/theme.css";
import logoImage from "../../assets/images/logo.png";
function PrimaryNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-theme-dark">
      <div className="container">
        <a className="navbar-brand">
          <img src={logoImage} />
        </a>
        <form className="search-form">
          <input type="text" placeholder="Search for Movies, Offers, etc.." />
          <button type="submit">Search</button>
        </form>
        <a className="header-button pull-right">Login</a>
      </div>
    </nav>
  );
}

export default PrimaryNavbar;
