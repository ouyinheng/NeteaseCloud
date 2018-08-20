import React,{Component} from 'react';
import './index.scss';
export default class OInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue:'',
            borderBottom:''
        }
        this.tofocus = this.tofocus.bind(this);
        this.toblur = this.toblur.bind(this);
        this.tochange = this.tochange.bind(this);
    }
    tofocus(){
        const borderBottom = this.renderBottom(true);
        this.setState({borderBottom})
    }
    toblur(){
        const borderBottom = this.renderBottom(false);
        this.setState({borderBottom})
    }
    tochange(e){
        let inputValue = e.target.value;
        this.setState({inputValue})
        this.props.tochange(inputValue);
    }
    renderBottom(data){
        if(data){
            return (
                <div className="oInput-border"></div>
            )
        } else {
            return null;
        }
    }
    render(){
        return (
            <div className="oInput">
                <input 
                    className="oInput-input" 
                    onFocus={this.tofocus} 
                    onBlur={this.toblur} 
                    onChange={this.tochange} 
                    value={this.state.inputValue}
                    placeholder="啦啦啦"
                />
                { this.state.borderBottom }
            </div>
        )
    }
}