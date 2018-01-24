import React from 'react';
import './font.css';

export default class Font extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <li>
        <span className="font-name">{this.props.message}</span>
        <span className="font-preview">Aa</span>
      </li>
    );
  }
}
