import React, { Component } from 'react';
import './ColourBox.css'

class ColourBox extends Component {
    render() {
        const { name, background } = this.props;
        return (
            <div style={{ background }} className='ColorBox'>
                <div className='copy-container'></div>
                <div className='box-content'>
                    <span>{name}</span>
                </div>
                <button className='copy-button'>Copy</button>
                <span className='see-more'>More</span>
            </div>
        )
    }
}

export default ColourBox;