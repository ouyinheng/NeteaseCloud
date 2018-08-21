import React,{ Component } from 'react';

export default class Ripple extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){

        return (
            <div className="ripple">
                { this.props.children }
            </div>
        )
    }
}