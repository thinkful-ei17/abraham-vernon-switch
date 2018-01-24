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
                    color: 'rgb(124, 124, 124)',
                    fontFamily: '\'Supermercado One\', cursive'
                },
                {
                    name:  'Aladin',
                    color: 'rgb(143, 83, 255)',
                    fontFamily: '\'Risque\', cursive'
                },
                {
                    name:  'Aclonica',
                    color: 'rgb(249, 133, 68)',
                    fontFamily: '\'VT323\', monospace'
                },
                {
                    name:  'Abril Fatface',
                    color: 'rgba(172, 255, 243, 0.97)',
                    fontFamily: '\'Kavivanar\', cursive'
                },
                { name:  'Aldrich',
                    color: 'rgb(64, 37, 129)',
                    fontFamily: '\'Sedgwick Ave\', cursive'
                },
                {
                    name:  'Alex Brush',
                    color: 'rgb(14, 255, 60)',
                    fontFamily: '\'Indie Flower\', cursive'
                },
                { name:  'Alfa Slab One',
                    color: 'rgb(102, 115, 143)',
                    fontFamily: '\'Anton\', sans-serif'
                },
                {
                    name: 'Alegreya Sans SC',
                    color: 'rgb(0, 232, 0)',
                    fontFamily: '\'Arial\', sans-serif'
                }
            ]
        };
    }
    render() {
        const fonts = this.state.fonts.map(f => <Font onFontClick={(message, color, fontFamily) => this.props.changeFunc(message, color, fontFamily)} message={f.name} color={f.color} font={f.fontFamily}/>);
        return (
            <div className="item-container">
                <ul>
                    {fonts}
                </ul>
            </div>
        );
    }
}
