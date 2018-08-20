import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './index.scss';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active:1
    };
    this.setActive = this.setActive.bind(this)
  }
  setActive(e,value){
    this.setState({
      active: value
    })
  }
  render() {
    return (
        <div className="header">
            <Link to="/admin/music" className="menu iconfont icon-view-list-o icon-ripple"></Link>
            <div className="center">
              <Link to="/admin/music" onClick={(e)=>{this.setActive(e,0)}} className={this.state.active===0?'active iconfont icon-yinle icon-ripple':'iconfont icon-yinle icon-ripple'}></Link>
              <Link to="/admin/recom" onClick={(e)=>{this.setActive(e,1)}}  className={this.state.active===1?'active iconfont icon-wangyiyunyinlezizhi-copy icon-ripple':'iconfont icon-wangyiyunyinlezizhi-copy icon-ripple'}></Link>
              <Link to="/admin/mv" onClick={(e)=>{this.setActive(e,2)}}  className={this.state.active===2?'active iconfont icon-shipin  icon-ripple':'iconfont icon-shipin  icon-ripple'}></Link>
            </div>
            <Link to="/search" className="search iconfont icon-sousuo icon-ripple"></Link>
        </div>
    );
  }
}

export default Header;