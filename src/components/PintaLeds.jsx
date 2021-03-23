import React, { Component } from 'react';
import ChangeValues from '../components/ChangeValues'
class PintaLeds extends Component {    

    state = {
        r: this.props.items[2],
        g: this.props.items[1],
        b: this.props.items[0]
    }

    
    render(){
        return(
            <div>
            <div className="row">
                <div className="mb-2 col-md-4">
                    <input type="button" className="btn btn-danger bot form-control" value={this.props.items[2]}/>                    
                </div>
                <div className="mb-2 col-md-4">                    
                    <input type="button" className="btn btn-success form-control" value={this.props.items[1]}/>                    
                </div>
                <div className="mb-2 col-md-4">                    
                    <input type="button" className="btn btn-info form-control" value={this.props.items[0]}/>
                </div>
            </div>
            <ChangeValues init={this.props.items}/>
            </div>
        );
    }
}

export default PintaLeds;