import React from 'react';
import './display.css';

export default class Display extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      message: 'Hello World!'
    };
  }
  render(){
    return (<div className="display-message">
      <p>{this.state.message}</p>
    </div>);
  }
}