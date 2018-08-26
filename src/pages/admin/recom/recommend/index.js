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
      newdt:'',
      bool:false,
      isMounted:true
    }
    this.toFMPlay = this.toFMPlay.bind(this);
    this.toDetails = this.toDetails.bind(this);
  }
  toDetails(id){
    this.props.history.push(`/app/details/${id}`)
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
        <div className="list-item" key={index} onClick={(e)=>{this.toDetails(item.id)}}>
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
  componentDidMount(){
    privatecontent().then(imglist=>{
      this.state.isMounted && this.setState({
        imglist
      })
    }).then(_=>{
      personalized().then(res=>{
        let songlist = this.renderSonglistNode(res.result.slice(0,6));
        this.state.isMounted && this.setState({songlist})
      }).then(_=>{
        newsong().then(res=>{
          console.log('asdf',res)
          let newsongs = this.renderNewSongsNode(res.result.slice(0,6));
          this.state.isMounted && this.setState({
            newsongs
          })
        }).catch(err=>{
          console.log('asdf',err)
          this.state.isMounted && this.setState({
            bool: true
          })
        })
      })
    }).then(_=>{
      djprogram().then(res=>{
        let newdt = this.renderSonglistNode(res.result.slice(0,6));
        this.state.isMounted && this.setState({
          newdt
        })
      }).then(_=>{
        this.state.isMounted && this.setState({
          bool: true
        })
      })
    }).catch(err=>{
      console.log(err)
      this.state.isMounted && this.setState({
        bool: true
      })
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
  componentWillUnmount(){
    let isMounted = false;
    this.setState({isMounted})
  }
  render() {
    return (
      
        <div className="Recommend">
          { this.state.bool &&
            <div>
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
            }
            { 
              !this.state.bool &&
              <div className="loading">
                <img src="/assets/loading.gif" alt="ll"/>
              </div>
            }
        </div>
    );
  }
}