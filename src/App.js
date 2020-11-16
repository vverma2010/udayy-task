import "./App.css";

import React, { Component } from "react";
import Login from "./Components/Login";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Components/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false, //here if we setting it to "true" to automatically redirect to the homepage
      //we can leave it to be handled by code itself if we use complete signup functionality
    };
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
