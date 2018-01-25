import React from 'react';
import '../css/display.css';
import Item from './item';

export default class Display extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
            message: 'Google',
            font: '\'Indie Flower\', cursive',
            styles: [
                { name:  'Amazon',
                    color: 'rgb(64, 37, 129)',
                    fontFamily: '\'Sedgwick Ave\', cursive'
                },
                {
                    name:  'Google',
                    color: 'rgb(143, 83, 255)',
                    fontFamily: '\'Indie Flower\', cursive'
                },
            ]
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
        console.log('changed font');
        this.setState({font: font});
    }

    changeCounter(counter){
        console.log('changed counter');
        this.setState({counter: counter});
    }

    changeEverything(message, color, font, counter) {
        console.log('this ran! - everythingFunc');
        this.changeMessage(message);
        this.changeBackgroundColor(color);
        this.changeFont(font);
        this.changeCounter(counter);
    }

    loopThro(n) {
        console.log('looptho ran!');
        console.log(this.state.styles.length);
        if (n > this.state.styles.length-2) {
            console.log('go back 0');
            n = 0;
            console.log(n);
        }

        else {
            console.log('increased?');
            n++;
            console.log(n);
        }

        this.changeEverything(this.state.styles[n].name, this.state.styles[n].color , this.state.styles[n].fontFamily, n);
    }
    render(){
        console.log(...this.state, {});

        return (<div className="display-message">
            <p style={{fontFamily: this.state.font}} onClick={() => this.loopThro(this.state.counter)}>{this.state.message}</p>
            {// <Item changeFunc={(message, color, font) => this.changeEverything(message, color, font)} />
            }
        </div>
        );
        // return (
        //     <p style={{fontFamily: this.state.font}}>{this.state.message}</p>
        //
        // );
    }
}
