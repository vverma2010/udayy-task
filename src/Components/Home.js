import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  state = {
    url1: "",
    url2: "",
  };
  logout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };
  render() {
    return (
      <div>
        <nav className="navigation">
          <div className="username">User</div>
          <div className="search-box">
            <input
              type="url"
              target="search1"
              placeholder="search here..."
              onChange={(e) => this.setState({ url1: e.target.value })}
            />
          </div>
          <div className="search-box">
            <input
              type="search"
              target="search2"
              placeholder="search here..."
              onChange={(e) => this.setState({ url2: e.target.value })}
            />
          </div>
          <Link to="/">
            <div className="logout" onClick={this.logout}>
              Logout
            </div>
          </Link>
        </nav>
        <div className="frame-container">
          <iframe
            title="search1"
            className="frame-1"
            src={this.state.url1}
          ></iframe>
          <iframe
            title="search2"
            className="frame-2"
            src={this.state.url2}
          ></iframe>
        </div>
      </div>
    );
  }
}
