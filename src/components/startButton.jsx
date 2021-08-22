import React, { Component } from "react";
import winLogo from "../assets/img/win.png";

class StartButton extends Component {
  state = {};
  render() {
    return (
      <div className="start-btn">
        <img src={winLogo} alt="Start Button" />
      </div>
    );
  }
}

export default StartButton;
