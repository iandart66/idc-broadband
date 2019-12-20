import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import home from "./components/home";
import broadband from "./components/broadband";
import axios from "axios";
//import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";

class App extends Component {
  state = {};

  async componentDidMount() {
    const promise = await axios
      .post("https://api.gamma.co.uk/auth/token", {
        content_type: "application/x-www-form-urlencoded",
        grant_type: "promise",
        username: "IanDart1",
        password: "Migj7heoGI"
      })
      .catch();
    console.log(promise);
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar />
          <main className="container-fluid">
            <Switch>
              <Route path="/broadband" Component={broadband} />
              ,<Route path="/" Component={home} />
            </Switch>
          </main>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
