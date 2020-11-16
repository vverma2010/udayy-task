import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      username: "",
      password: "",
    };
  }

  handleSubmit = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  render() {
    const { isLoggedIn } = this.state;

    if (isLoggedIn) {
      return <Redirect to="/home" />;
    }

    return (
      <div className="wrapper">
        <h1>Login</h1>
        <div className="form">
          <input
            className="email"
            type="text"
            placeholder="Enter Username"
            required
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <input
            className="password"
            type="password"
            placeholder="Enter Password"
            required
          />
          <button onClick={this.handleSubmit}>Login</button>
        </div>
      </div>
    );
  }
}
