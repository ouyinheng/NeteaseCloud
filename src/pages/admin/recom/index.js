import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import ListItem from '@material-ui/core/ListItem';
export default class Recom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:'recents',
      active:0,
      userinfo:'',
      tab:[
        {key:'/app/admin/recom/recommend',name:'推荐'},
        {key:'/app/admin/recom/friend',name:'朋友'},
        {key:'/app/admin/recom/broad',name:'电台'}
      ],
      isMounted:true
    };
    this.setActive = this.setActive.bind(this)
  }
  setActive(e,value){
    this.setState({
      active:value
    })
  }
  componentDidMount(){
    var userinfo = localStorage.getItem('token');
    if(userinfo) {
      userinfo = JSON.parse(userinfo);
    }
  }
  componentWillUnmount(){
    let isMounted = false;
    this.setState({isMounted})
  }
  render() {
    return (
        <div className="recom" style={{marginBottom: '80px'}}>
            <header className="recom-nav-group">
              <ListItem button onClick={(e)=>{this.setActive(e,0)}} style={{padding:'0'}}>
                <Link to="/app/admin/recom/recommend" className={this.state.active===0?'recom-nav-item active':'recom-nav-item'}>推荐</Link>
              </ListItem>
              <ListItem button onClick={(e)=>{this.setActive(e,1)}} style={{padding:'0'}}>
                <Link to="/app/admin/recom/friend" className={this.state.active===1?'recom-nav-item active':'recom-nav-item'}>朋友</Link>
              </ListItem>
              <ListItem button onClick={(e)=>{this.setActive(e,2)}} style={{padding:'0'}}>
                <Link to="/app/admin/recom/broad" className={this.state.active===2?'recom-nav-item active':'recom-nav-item'}>推荐</Link>
              </ListItem>
            </header>
            <section className="recom-section">
              { this.props.children } 
            </section>
        </div>
    );
  }
}