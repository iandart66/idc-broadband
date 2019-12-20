import React, { Component } from "react";
import broadbandimg from "../broadband.png";

class broadband extends Component {
  state = {};
  render() {
    return (
      <img className="img-fluid" src={broadbandimg} alt="broadband-header" />
    );
  }
}

export default broadband;
