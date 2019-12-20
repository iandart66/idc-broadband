import React, { Component } from "react";
import { Link } from "react-router-dom";

class navBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light">
        <ul className="navbar-nav">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/broadband">
              Broadband
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default navBar;
