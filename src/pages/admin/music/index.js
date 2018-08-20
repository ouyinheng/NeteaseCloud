import React, { Component } from 'react';
import './index.scss';
class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img:'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/h%3D452/sign=bdba7c9fb3a1cd111ab673258b13c8b0/aec379310a55b319aea21ada4aa98226cefc17c1.jpg',
      username:'nihao--shijie',
      num:0
    };
    // this.toSearch = this.toSearch.bind(this)
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
              <div className="list-item flex -center">
                <span className="list-icon iconfont icon-yinyueclick"></span>
                <div className="list-content border-bottom ">
                  <span>本地音乐</span>
                  <span>({this.state.num})</span>
                </div>
              </div>
              <div className="list-item flex -center">
                <span className="list-icon iconfont icon-yinyueclick"></span>
                <div className="list-content border-bottom ">
                  <span>本地音乐</span>
                  <span>({this.state.num})</span>
                </div>
              </div>
              <div className="list-item flex -center">
                <span className="list-icon iconfont icon-yinyueclick"></span>
                <div className="list-content border-bottom ">
                  <span>本地音乐</span>
                  <span>({this.state.num})</span>
                </div>
              </div>
              <div className="list-item flex -center">
                <span className="list-icon iconfont icon-yinyueclick"></span>
                <div className="list-content border-bottom ">
                  <span>本地音乐</span>
                  <span>({this.state.num})</span>
                </div>
              </div>
            </section>
        </div>
    );
  }
}

export default Music;