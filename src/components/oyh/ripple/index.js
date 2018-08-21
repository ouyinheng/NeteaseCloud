import React,{ Component } from 'react';

export default class Ripple extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.setRipple = this.setRipple.bind(this);
    }
    setRipple(){
        
    }
    render(){

        return (
            <div className="ripple" onClick={this.setRipple}>
                { this.props.children }
            </div>
        )
    }
}