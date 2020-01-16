import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <nav className="login">
        <h2>Login to your shop inventory</h2>
        <p>sign-in to manage your shop's inventory</p>
        <button
          className="facebook"
          onClick={() => this.props.authenticate("Facebook")}
        >
          {" "}
          Log in with Facebook{" "}
        </button>
        <button
          className="github"
          onClick={() => this.props.authenticate("Github")}
        >
          {" "}
          Log in with Github{" "}
        </button>
        <p>authentication is under-construction</p>
      </nav>
    );
  }
}

export default Login;
