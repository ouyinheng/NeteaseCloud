import React, { Component } from 'react';
import './index.scss';

import { privatecontent,personalized,newsong,djprogram,getFM } from '../../../../request/http.request'
import ShufflingFigure from '../../../../components/oyh/ShufflingFigure';
import ListItem from '@material-ui/core/ListItem';
export default class Recommend extends Component {
  constructor(props){
    super(props);
    this.state = {
      imglist:'',
      imgNode:'',
      songlist:'',
      newsongs:'',
      newdt:''
    }
    this.toFMPlay = this.toFMPlay.bind(this);
  }
  renderImgNode(data){
    return data.forEach((item,index)=>{
      return (
        <ShufflingFigure
          key={index}
          imglist={item.picUrl}
        />
      )
    })
  }
  renderSonglistNode(data){
    return data.map((item,index)=>{
      return (
        <div className="list-item" key={index}>
          <img className="list-img" src={item.picUrl} alt="ll"/>
          <span style={{fontSize:'14px'}}>{item.name}</span>
        </div>
      )
    })
  }
  renderNewSongsNode(data){
    return data.map((item,index)=>{
      return (
        <div className="list-item" key={index}>
          <img className="list-img" src={item.song.album.blurPicUrl} alt="ll"/>
          <span style={{fontSize:'14px'}}>{item.name}</span>
        </div>
      )
    })
  }
  componentWillMount(){
    privatecontent().then(imglist=>{
      console.log(imglist)
      this.setState({
        imglist
      })
    }).catch(err=>{
      console.log(err)
    })
    personalized().then(res=>{
      let songlist = this.renderSonglistNode(res.result.slice(0,6));
      this.setState({songlist})
    }).catch(err=>{
      console.log(err)
    })
    newsong().then(res=>{
      let newsongs = this.renderNewSongsNode(res.result.slice(0,6));
      this.setState({
        newsongs
      })
    }).catch(err=>[

    ])
    djprogram().then(res=>{
      console.log(res.result.slice(0,5))
      let newdt = this.renderSonglistNode(res.result.slice(0,6));
      this.setState({
        newdt
      })
    }).catch(err=>{

    })
  }
  toFMPlay(){
    console.log('asdf')
    getFM().then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }
  render() {
    return (
        <div className="Recommend">
            <header className="Recommend-header">
              <div className="Recommend-red"></div>
              <div className="Recommend-white"></div>
              <div className="Recommend-card">
                <ShufflingFigure
                  imglist={this.state.imglist}
                />
              </div>
            </header>
            <section className="Recommend-section">
              <div className="Recommend-classify border-bottom"  onClick={this.toFMPlay}>
                <div className="classify-item" >
                    <span className="iconfont icon-FM classify-btn"></span>
                    <div className="item-content">私人FM</div>
                </div>
                <div className="classify-item">
                    <span className="iconfont icon-meirituijian classify-btn"></span>
                    <div className="item-content">每日推荐</div>
                </div>
                <div className="classify-item">
                    <span className="iconfont icon-gedan classify-btn"></span>
                    <div className="item-content">歌单</div>
                </div>
                <div className="classify-item">
                    <span className="iconfont icon-paihangbang classify-btn"></span>
                    <div className="item-content">排行榜</div>
                </div>
              </div>
              <div className="recom-song-list">
                <ListItem button>
                  <p className="recom-song-list-title">推荐歌单<span className="iconfont icon-right"></span></p>
                </ListItem>
                <div className="list-group">
                  { this.state.songlist }
                </div>
                <ListItem button>
                  <p className="recom-song-list-title">最新音乐<span className="iconfont icon-right"></span></p>
                </ListItem>
                <div className="list-group">
                  { this.state.newsongs }
                </div>
                <ListItem button>
                  <p className="recom-song-list-title">主播电台<span className="iconfont icon-right"></span></p>
                </ListItem>
                <div className="list-group">
                  { this.state.newdt }
                </div>
              </div>
            </section>
        </div>
    );
  }
}