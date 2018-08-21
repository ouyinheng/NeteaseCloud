import React,{ Component } from 'react';
import './index.scss';
import Button from '@material-ui/core/Button';
export default class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.goBack = this.goBack.bind(this);
    }
    goBack(){
        window.history.go(-1);
    }
    render(){
        return (
            <div className="TopBar" style={this.props.color}>
                <Button className="TopBar-btn">
                    <span className="iconfont icon-arrowleft TopBar-back" onClick={this.goBack}></span>
                </Button>
                { this.props.children }
            </div>
        )
    }
}