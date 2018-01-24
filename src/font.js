import React from 'react';

export default class Font extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <span>{this.props.message}</span>
        <span>Aa</span>
      </div>
    );
  }
}
