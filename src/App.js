import "./App.css";

import React, { Component } from "react";
import Login from "./Components/Login";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Components/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false, 
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
