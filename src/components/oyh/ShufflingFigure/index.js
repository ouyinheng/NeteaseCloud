import React, { Component } from 'react';
import './index.scss';
// import Card from '@material-ui/core/Card';
export default class ShufflingFigure extends Component {
    constructor(props){
        super(props);
        this.state = {
            imgurl:"http://p1.music.126.net/gV3JM2igHBhHySggwHbFLw==/109951163460657848.jpg",
            imglist:'',
            isMounted:true
        }
    }
    componentDidMount(){
        let i=0;
        let that = this;
        let imglist = that.props.imglist.result;
        this.state.isMounted && this.setState({imglist})
        setInterval(()=>{
            var imglist = this.state.imglist;
            imglist && this.state.isMounted && that.setState({
                imgurl: imglist[i].picUrl
            })
            i=imglist?(i>=imglist.length-1)?0:i+1:0
        },2000)
    }
    componentWillUnmount(){
        this.setState({
            isMounted: false
        })
    }
  render() {
    return (
        <div className="ShufflingFigure">
            <div className="sg-card">
                <img src={this.state.imgurl} alt="la" className="sf-img"/>
            </div>
        </div>
    );
  }
}