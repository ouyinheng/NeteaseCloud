import React, { Component } from 'react';
import './index.scss'
import axios from 'axios';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue:''
        }
        this.goBack = this.goBack.bind(this);
        this.getChange = this.getChange.bind(this);
        this.clearValue = this.clearValue.bind(this);
        this.submit = this.submit.bind(this);
    }
    goBack(){
        var newState = false;
        this.props.closeSearch(newState);
    }
    getChange(){
        this.setState({
            inputValue: this.refs.ph.value
        }) 
    }
    clearValue(){
        this.setState({
            inputValue: ''
        }) 
    }
    submit(e){
        e.preventDefault();
        axios.get(`http://192.168.100.1:3001/search?keywords=${this.state.inputValue}`).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
        console.log('submit')
    }
    render() {
        // const { classes } = this.props;
        if(this.props.isSearch){
            return (
                <div className="Search">
                    <form className="Input" onSubmit={this.submit}>
                        <span className="iconfont icon-arrowleft" onClick={this.goBack}></span>
                        <div className="hasClose">
                            <input type="text" ref="ph" placeholder="placeholder" onChange={this.getChange} className="input" value={this.state.inputValue}/>
                            {this.state.inputValue.length!==0 &&
                                <span className="iconfont icon-guanbi" onClick={this.clearValue}></span>
                            }
                        </div>
                    </form>
                    <div className="Singer-classification">
                        <div className="Singer-center">
                            <span className="iconfont icon-team"></span>
                            <span>歌手分类</span>
                            <span className="iconfont icon-right"></span>
                        </div>
                    </div>
                    <div className="hotSearch">
                        <span className="tips">热门搜索</span>
                    </div>
                </div>
            )
        } else {
            return false;
        }
    }
}
export default Search