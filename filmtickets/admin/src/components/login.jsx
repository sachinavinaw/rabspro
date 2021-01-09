import React, { Component } from "react";
import "./login.css";
import { Redirect } from "react-router-dom";
import axios from "axios";
import logoImage from "../assets/images/filmtickets-logo.png";
class Login extends Component {
  state = {};
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.email,
      password: this.password,
    };
    console.dir(data);
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
  componentDidMount = () => {
    localStorage.removeItem("token");
  };
  render() {
    if (this.state.loggedIn) {
      return <Redirect to={"/home"} />;
    } else {
      return (
        <div className="auth-outer">
          <div className="auth-container">
            <div className="card card-container">
              <div className="profile-img-card">
                <img src={logoImage} alt="" />
              </div>
              <div className="row">
                <div className="col-sm-12 auth-wrapper mt-2">
                  <h3>
                    <span className="theme-red">admin</span>
                    <span className="theme-grey">Login</span>
                  </h3>

                  <form
                    className="form-signin mt-4"
                    onSubmit={this.handleSubmit}
                  >
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
                        <input type="checkbox" value="remember-me" /> Remember
                        me
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

                  <div className="mt-3">
                    <a className="header-button bottom" href="/register">
                      Not an account ? Sign Up
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Login;
