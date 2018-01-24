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
  render(){
    return (<div className="display-message">
      <p>{this.state.message}</p>
      <div className="swticher"> 
        <Item />
      </div>        
    </div>
    );
  }
}