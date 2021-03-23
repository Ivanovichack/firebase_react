import React, { Component } from 'react';
import './style.css'

class Circulo extends Component {
    render(){
        return(
            <div style={{ background: `rgb(${this.props.valR},${this.props.valG},${this.props.valB})` }} className="intro">
                    
            </div>
        );
    }
}

export default Circulo;
