import React, {Component} from 'react';
import {Notifications} from 'react-push-notification';
import {handleClick} from './Notification';
import './index.css';

class App extends Component {
    render() {
        return (
            <div className="App">
              <Notifications />
              <button onClick={handleClick}>
                Push notification now
              </button>
            </div>
        )
    }
}

export default App;
