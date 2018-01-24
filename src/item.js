import React from 'react';
import Font from './font';
import './item.css';

export default class Item extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            fonts: [
                {
                    name: 'Akronim',
                    color: 'rgb(124, 124, 124)'
                },
                {
                    name:  'Aladin',
                    color: 'rgb(143, 83, 255)'
                },
                {
                    name:  'Aclonica',
                    color: 'rgb(249, 133, 68)'
                },
                {
                    name:  'Abril Fatface',
                    color: 'rgba(172, 255, 243, 0.97)'
                },
                { name:  'Aldrich',
                    color: 'rgb(64, 37, 129)'
                },
                {
                    name:  'Alex Brush',
                    color: 'rgb(14, 255, 60)'
                },
                { name:  'Alfa Slab One',
                    color: 'rgb(102, 115, 143)'
                },
                {
                    name: 'Alegreya Sans SC',
                    color: 'rgb(0, 232, 0)'
                }
            ]
        };
    }
    render() {
        const fonts = this.state.fonts.map(f => <Font onFontClick={(message, color) => this.props.changeFunc(message, color)} message={f.name} color={f.color} />);
        return (
            <div className="item-container">
                <ul>
                    {fonts}
                </ul>
            </div>
        );
    }
}
