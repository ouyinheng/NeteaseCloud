import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './index.scss';
import Drawer from '@material-ui/core/Drawer';
import Leftmenu from '../../pages/admin/leftmenu';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active:1,
      side:'',
      usreinfo:''
    };
    this.setActive = this.setActive.bind(this)
    this.toggleDrawer = this.toggleDrawer.bind(this)
  }
  setActive(e,value){
    this.setState({
      active: value
    })
  }
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  componentDidMount(){
    let userinfo = localStorage.getItem('token');
    if(userinfo){
      userinfo = JSON.parse(userinfo)
      console.log(userinfo)
      this.setState({userinfo})
    }
  }
  render() {
    return (
        <div className="header">
            <Link to="/admin/music" className="menu iconfont icon-view-list-o icon-ripple" onClick={this.toggleDrawer('left', true)}></Link>
            <div className="center">
              <Link to="/admin/music" onClick={(e)=>{this.setActive(e,0)}} className={this.state.active===0?'active iconfont icon-yinle icon-ripple':'iconfont icon-yinle icon-ripple'}></Link>
              <Link to="/admin/recom/recommend" onClick={(e)=>{this.setActive(e,1)}}  className={this.state.active===1?'active iconfont icon-wangyiyunyinlezizhi-copy icon-ripple':'iconfont icon-wangyiyunyinlezizhi-copy icon-ripple'}></Link>
              <Link to="/admin/mv" onClick={(e)=>{this.setActive(e,2)}}  className={this.state.active===2?'active iconfont icon-shipin  icon-ripple':'iconfont icon-shipin  icon-ripple'}></Link>
            </div>
            <Link to="/search" className="search iconfont icon-sousuo icon-ripple"></Link>
            <Drawer className="modelmune" open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                <Leftmenu userinfo={this.state.userinfo}/>
            </Drawer>
        </div>
    );
  }
}

export default Header;