import React from 'react';
import './font.css';

export default class Font extends React.Component {
    constructor(props){
        super(props);
    }
    printSomething() {
        console.log('I got clicked!');
    }
    render() {
        return (
            <li onClick={() => this.props.onFontClick(this.props.message, this.props.color)}>
                <span className="font-name">{this.props.message}</span>
                <span className="font-preview">Aa</span>
            </li>
        );
    }
}
