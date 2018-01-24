import React from 'react';
import './display.css';
import Item from './item';

export default class Display extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message: 'Hello World!'
        };


    }


    changeBackgroundColor(color) {
        //document.body.style.backgroundColor = 'rgb(0, 232, 113)';
        console.log('Changed color', color);
        document.body.style.backgroundColor = color;
    }

    changeMessage(message) {
        console.log('Changed Message!');
        this.setState({message: message});

    }

    changeEverything(message, color) {
        console.log('this ran! - everythingFunc');
        this.changeMessage(message);
        this.changeBackgroundColor(color);

    }

    render(){
        return (<div className="display-message">
            <p>{this.state.message}</p>
            <div className="switcher">
                <Item changeFunc={(message, color) => this.changeEverything(message, color)} />
            </div>
        </div>
        );
    }
}
