import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleSubmit = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  render() {
    const { isLoggedIn } = this.state;
    console.log(isLoggedIn);

    if(isLoggedIn) {
      return <Redirect to= '/home' />;
    }

    return (
      <div className="wrapper">
        <h1>Login</h1>
        <div className="form">
          <input type="email" placeholder="Enter Email" required />
          <input type="password" placeholder="Enter Password" required />
          <button onClick={this.handleSubmit}>Login</button>
        </div>
      </div>
    );
  }
}
