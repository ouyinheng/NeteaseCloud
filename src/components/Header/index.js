import React, { Component } from 'react';
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
        <div>
            <span className="menu iconfont icon-view-list-o"></span>
            <div className="center"></div>
            <div className="serach"></div>
        </div>
    );
  }
}

export default Header;