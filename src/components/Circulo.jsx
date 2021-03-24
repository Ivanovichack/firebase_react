import React, { Component } from 'react';
import './style.css'

class Circulo extends Component {
    render(){
        return(
            <div className="container">
            <div className="row">                
                <div style={{ background: `rgb(${this.props.valR},${this.props.valG},${this.props.valB})` }} className="intro">
                    
                </div>
            </div>
            </div>
        );
    }
}

export default Circulo;
