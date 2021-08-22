import React, { Component } from 'react';
import StartButton from './startButton';

class Taskbar extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="taskbar">
            <StartButton/>
        </div> 
        );
    }
}
 
export default Taskbar;