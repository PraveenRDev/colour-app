import React, { Component } from 'react';
import './ColourBox.css'

class ColourBox extends Component {
    render() {
        return (
            <div style={{ background: this.props.background }} className='ColorBox'>
                <span>{this.props.name}</span>
                <span>MORE</span>
            </div>
        )
    }
}

export default ColourBox;