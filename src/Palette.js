import React, { Component } from 'react'
import ColorBox from './ColourBox';
import NavBar from './Navbar';
import './Palette.css';

class Palette extends Component {

    constructor(props) {
        super(props);
        this.state = { level: 500 };
    }

    changeLevel = (level) => {
        this.setState({level})
    }


    render() {
        const { colors } = this.props.palette;
        const { level } = this.state;
        const colorBoxes = colors[level].map(color => {
            return <ColorBox background={color.hex} name={color.name} />
        })
        return (
            <div className="Palette">
                <NavBar level={level} changeLevel={this.changeLevel}/>
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