import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './index.scss';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    // this.toSearch = this.toSearch.bind(this)
  }

  render() {
    return (
        <div className="header">
            <Link to="/admin/music" className="menu iconfont icon-view-list-o"></Link>
            <div className="center">
              <Link to="/admin/music" className="iconfont icon-yinle"></Link>
              <Link to="/admin/music" className="iconfont icon-wangyiyunyinlezizhi-copy"></Link>
              <Link to="/admin/music" className="iconfont icon-shipin"></Link>
            </div>
            <Link to="/search" className="search iconfont icon-sousuo"></Link>
        </div>
    );
  }
}

export default Header;