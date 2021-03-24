import * as React from 'react';
import { Component } from 'react';
import { FirebaseDatabaseMutation } from "@react-firebase/database";
import './style.css'
import Circulo from './Circulo';

class ChangeValues extends Component {
    
    state = {
        ValR: this.props.init[2],
        ValG: this.props.init[1],
        ValB: this.props.init[0]
    }


    handleChangeR = (event) => {
        this.setState({
            ValR: event.target.value
        })
    }

    handleChangeG = (event) => {
        this.setState({
            ValG: event.target.value
        })
        
    }

    handleChangeB = (event) => {
        this.setState({
            ValB: event.target.value
        });        
    }

    render() {
        return (
            <div>
            <FirebaseDatabaseMutation type="set" path="led/">
                {({ runMutation }) => (
                    <div>
                    <form className="container"
                        onChange={async ev => {                            
                            await runMutation({
                                r: Number(this.state.ValR),
                                g: Number(this.state.ValG),
                                b: Number(this.state.ValB)
                            });                                                        
                        }}
                    >
                        <div className="mb-2 row">                            
                            <input onChange={this.handleChangeR} type="range" min="1" max="255" step="1" class="slider-red anchor custom-range" defaultValue={this.props.init[2]}/>                            
                        </div>
                        <div className="mb-2 row">                            
                            <input onChange={this.handleChangeG} type="range" min="1" max="255" step="1" class="slider-green anchor custom-range" defaultValue={this.props.init[1]}/>                            
                        </div>
                        <div className="row">                            
                            <input onChange={this.handleChangeB} type="range" min="1" max="255" step="1" class="anchor custom-range" defaultValue={this.props.init[0]}/>                            
                        </div>
                    </form>                    
                    </div>
                )}
            </FirebaseDatabaseMutation>
            <Circulo valR={this.props.init[2]} valG={this.props.init[1]} valB={this.props.init[0]}/>
            </div>
        );
    }
}

export default ChangeValues;