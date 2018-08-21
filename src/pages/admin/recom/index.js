import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default class Recom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:'recents',
      active:0,
      userinfo:''
    };
    this.setActive = this.setActive.bind(this)
  }
  setActive(e,value){
    this.setState({
      active: value
    })
  }
  componentWillMount(){
    var userinfo = localStorage.getItem('token');
    if(userinfo) {
      userinfo = JSON.parse(userinfo);
      console.log(userinfo)
    }
  }
  render() {
    return (
        <div className="recom">
            <header className="recom-nav-group">
              <Link to="/admin/recom/recommend" className={this.state.active===0?'recom-nav-item active':'recom-nav-item'} onClick={(e)=>{this.setActive(e,0)}}>推荐</Link>
              <Link to="/admin/recom/friend" className={this.state.active===1?'recom-nav-item active':'recom-nav-item'} onClick={(e)=>{this.setActive(e,1)}}>朋友</Link>
              <Link to="/admin/recom/broad" className={this.state.active===2?'recom-nav-item active':'recom-nav-item'} onClick={(e)=>{this.setActive(e,2)}}>电台</Link>
            </header>
            <section className="recom-section">
              { this.props.children }
            </section>
        </div>
    );
  }
}