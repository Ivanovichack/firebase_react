import React, { Component } from 'react';

class PintaLeds extends Component {

    render(){
        return(
            <div>
                <label htmlFor="">{this.props.items.r}</label>
            </div>
        );
    }
}

export default PintaLeds;