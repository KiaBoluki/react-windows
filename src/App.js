import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/App.css';
import Taskbar from './components/taskbar';
import Desktop from './components/desktop';

export class App extends Component {
  render() {
    return (
      <div>
        <Desktop/>
        <Taskbar/>
      </div>
    )
  }
}

export default App
