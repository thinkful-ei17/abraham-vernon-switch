import React from 'react';
import './App.css';
import Display from './display';

class App extends React.Component {

    render() {
    //this.changeBackgroundColor();
        return (
            <div id="app" className="App">
                <Display />
            </div>
        );
    }
}

export default App;
