import React, { Component } from 'react';
import './index.scss';
class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    // this.toSearch = this.toSearch.bind(this)
  }

  render() {
    return (
        <div className="music">
            <header className="music-header">
              <div className="header-red"></div>
              <div className="header-white"></div>
              <div className="mini-card mine"></div>
            </header>
        </div>
    );
  }
}

export default Music;