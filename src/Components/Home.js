import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
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
            <input type="search" target="search1"  placeholder="search here..." />
          </div>
          <div className="search-box">
            <input type="search" placeholder="search here..." />
          </div>
          <Link to="/">
            <div className="logout" onClick={this.logout}>
              Logout
            </div>
          </Link>
        </nav>
        <div className="frame-container">
            <iframe title="search1" className="frame-1" ></iframe>
            <iframe title="search2" className="frame-2" ></iframe>
        </div>
      </div>
    );
  }
}
