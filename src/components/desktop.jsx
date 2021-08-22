import React, { Component } from "react";
import ContextMenu from "./ContextMenu";

class Desktop extends Component {
  state = {
      contextMenuX:0,
      contextMenuY:0,
  };

  onClick = (e) => {
      e.preventDefault();
      this.setState({
          contextMenuX: e.nativeEvent.clientX,
          contextMenuY: e.nativeEvent.clientY
      });
      console.log(this.state)
  };
  render() {
    return (
      <div className="desktop" onContextMenu={this.onClick}>
        
        <ContextMenu x={this.state.contextMenuX} y={this.state.contextMenuY}/>
      </div>
    );
  }
}

export default Desktop;
