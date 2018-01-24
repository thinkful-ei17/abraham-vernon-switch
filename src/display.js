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

  changeMessage(message) {
    console.log('Changed Message!');
    this.setState({message: message});

  }
  render(){
    return (<div className="display-message">
      <p>{this.state.message}</p>
      <div className="switcher">
        <Item changeMessageFunc={(message) => this.changeMessage(message)} />
      </div>
    </div>
    );
  }
}
