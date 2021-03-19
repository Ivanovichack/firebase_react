import React, { Component } from 'react';

class PintaLeds extends Component {    
    
    constructor(){
        let a=0,b=0,c=0;
    }

    state = {
        r: this.props.items[0],
        g: this.props.items[1],
        b: this.props.items[2]
    }

    
    render(){
        return(
            <div className="row">
                <div className="col-md-4">
                    <input type="button" className="btn btn-danger" value={this.state.r}/>
                    <input type="button" className="btn btn-success" value={this.state.g}/>
                    <input type="button" className="btn btn-info" value={this.state.b}/>
                </div>
                <div className="col-md-6">
                    <div className="row">                        
                        <input type="range" min="0" max="255" step="1" class="form-range" value={this.a}/>
                    </div>
                    <div className="row">
                        <input type="range" min="0" max="255" step="1" class="form-range" />
                    </div>
                    <div className="row">
                        <input type="range" min="0" max="255" step="1" class="form-range" />
                    </div>
                </div>                
            </div>
        );
    }
}

export default PintaLeds;