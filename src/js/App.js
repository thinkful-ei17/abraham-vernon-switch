import React from 'react';
import '../css/App.css';
import Display from './otherDisplay';

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
