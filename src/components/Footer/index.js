import React, { Component } from 'react';
import './index.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    // this.toSearch = this.toSearch.bind(this)
  }

  render() {
    return (
        <div className="footer">
            <div className="footer-left">
              <img className="footer-img" src="http://pic2.52pk.com/files/160216/5329500_160443_1.png" alt=""/>
              <div className="footer-content">
                <div className="footer-title">title</div>
                <div className="footer-author">author</div>
              </div>
            </div>
            <div className="footer-right">
              <span className="footer-play iconfont icon-16"></span>
              <span className="footer-list iconfont icon-tianjia01"></span>
            </div>
        </div>
    );
  }
}

export default Footer;