import React, { Component } from 'react'
import ColorBox from './ColourBox';
import './Palette.css';

class Palette extends Component {
    render() {
        const colorBoxes = this.props.colors.map(color => {
            return <ColorBox background={color.color} name={color.name} />
        })
        return (
            <div className="Palette">
                {/* NavBar goes here */}
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                {/* Footer goes here */}
            </div>
        )
    }
}

export default Palette;