import React from 'react';
import Font from './font';
import './item.css';

export default class Item extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      fonts: [
        { name: 'Akronim'},
        { name:  'Aladin'},
        { name:  'Aclonica'},
        { name:  'Abril Fatface'},
        { name:  'Aldrich' },
        { name:  'Alex Brush' },
        { name:  'Alfa Slab One' },
        { name: 'Alegreya Sans SC'}
      ]
    };
  }
  render() {
    const fonts = this.state.fonts.map(f => <Font message={f.name} />);
    return (
      <div className="item-container">
        <ul>
          {fonts}
        </ul>
      </div>
    );
  }
}
