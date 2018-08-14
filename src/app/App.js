import React, { Component } from "react";
import "./App.css";
import Login from "./components/log-in_page/log-in_page";
import Dashboard from "./components/dashboard_page/dashboard_page";
import { BrowserRouter, Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch className="app">
          <Route
            path="/"
            exact
            component={Login}
          />
          <Route
            path="/dashboard"
            component={Dashboard}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
