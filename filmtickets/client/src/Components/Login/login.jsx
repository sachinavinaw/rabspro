import React, { Component } from "react";
import "./login.css";
import { Redirect } from "react-router-dom";
import axios from "axios";
import logoImage from "../../assets/images/filmtickets-logo.png";
import socialIconGoogle from "../../assets/images/social-media/google.png";
import socialIconFacebook from "../../assets/images/social-media/facebook.png";
export default class UserLogin extends Component {
  state = {};
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.email,
      password: this.password,
    };
    //console.dir(data);
    axios
      .post("/users/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        this.setState({
          loggedIn: true,
        });
        this.props.setUser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    if (this.state.loggedIn) {
      return <Redirect to={"/"} />;
    }
    return (
      <div className="auth-container">
        <div className="card card-container">
          <div className="profile-img-card">
            <img src={logoImage} alt="" />
          </div>
          <div className="row">
            <div className="col-sm-12 auth-wrapper">
              <div className="row">
                <div className="col-sm-7">
                  <h3>Login</h3>
                </div>
                <div className="col-sm-5">
                  <a class="header-button pull-right" href="/register">
                    Sign Up
                  </a>
                </div>
              </div>
              <div className="login-title  mt-2">
                <h5>Connect with a social network</h5>
              </div>

              <a className="btn btn-sm social-login">
                <img src={socialIconGoogle} />
                Google
              </a>
              <a className="btn btn-sm social-login">
                <img src={socialIconFacebook} />
                facebook
              </a>
              <div className="text-seperator mt-2">
                <span>OR</span>
              </div>
              <div className="login-title mt-2">
                <h5>Login with email id</h5>
              </div>
              <form className="form-signin" onSubmit={this.handleSubmit}>
                <span id="reauth-email" className="reauth-email"></span>
                <input
                  type="email"
                  id="inputEmail"
                  className="form-control"
                  placeholder="Email address"
                  onChange={(e) => (this.email = e.target.value)}
                  autoFocus
                />
                <input
                  type="password"
                  id="inputPassword"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => (this.password = e.target.value)}
                />
                <div id="remember" className="checkbox">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <button
                  className="btn btn-lg btn-block btn-signin"
                  type="submit"
                >
                  Sign in
                </button>
              </form>
              <a href="/" className="forgot-password">
                Forgot the password?
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
