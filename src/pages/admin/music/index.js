import React, { Component } from 'react';
import './index.scss';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img:'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/h%3D452/sign=bdba7c9fb3a1cd111ab673258b13c8b0/aec379310a55b319aea21ada4aa98226cefc17c1.jpg',
      username:'nihao--shijie',
      num:0
    };
  }

  componentWillMount(){
    let userinfo = localStorage.getItem('token');
    userinfo && this.setState({
      img:JSON.parse(userinfo).profile.avatarUrl,
      username:JSON.parse(userinfo).profile.nickname
    })
  }
  render() {
    return (
        <div className="music">
            <header className="music-header">
              <div className="header-red"></div>
              <div className="header-white"></div>
              <div className="mini-card mine between">
                <div className="flex -center ">
                  <img className="music-icon" src={this.state.img} alt="icon"/>
                  <span>{this.state.username}</span>
                </div>
                <div className="member">开通会员</div>
              </div>
            </header>
            <section className="music-section">
              <List component="nav">
                <ListItem button className="list-item flex -center border-bottom">
                  <span className="list-icon iconfont icon-yinyueclick"></span>
                  <ListItemText primary={'本地音乐('+this.state.num+')' }/>
                </ListItem>
                <ListItem button className="list-item flex -center border-bottom">
                  <span className="list-icon iconfont icon-yinyueclick"></span>
                  <ListItemText primary={'本地音乐('+this.state.num+')' }/>
                </ListItem>
                <ListItem button className="list-item flex -center border-bottom">
                  <span className="list-icon iconfont icon-yinyueclick"></span>
                  <ListItemText primary={'本地音乐('+this.state.num+')' }/>
                </ListItem>
                <ListItem button className="list-item flex -center">
                  <span className="list-icon iconfont icon-yinyueclick"></span>
                  <ListItemText primary={'本地音乐('+this.state.num+')' }/>
                </ListItem>
                {/* <ListItem button component="a" href="#simple-list">
                  <ListItemText primary="Spam" />
                </ListItem> */}
              </List>
            </section>
        </div>
    );
  }
}

export default Music;