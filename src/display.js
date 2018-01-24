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

    changeFont(font){
        this.setState({font: font});
    }

    changeEverything(message, color, font) {
        console.log('this ran! - everythingFunc');
        this.changeMessage(message);
        this.changeBackgroundColor(color);
        this.changeFont(font);
    }

    render(){
        return (<div className="display-message">
            <p style={{fontFamily: this.state.font}}>{this.state.message}</p>
            <Item changeFunc={(message, color, font) => this.changeEverything(message, color, font)} />
        </div>
        );
    }
}
