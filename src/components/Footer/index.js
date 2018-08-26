import React, { Component } from 'react';
import './index.scss';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import {getdetail} from '../../request/http.request'
import { connect } from 'react-redux';
import { switchPaused, switchSRC } from '../../redux/action';
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.setPaused = this.setPaused.bind(this);
  }
  setPaused(e){
    e.preventDefault();
    const { paused,dispatch } = this.props;
    let audio = document.getElementById('audio');
    paused && audio.pause();
    !paused && audio.play();
    dispatch(switchPaused(!paused))
  }
  componentDidMount(){
    let hisMusic = localStorage.getItem('musicHistory');
    if(hisMusic) {
      let first = JSON.parse(hisMusic)[0];
      console.log(first)
      const {dispatch} = this.props;
      getdetail(first).then(res=>{
        console.log(res,'asdf')
        dispatch(switchSRC(first,res.songs[0].name,res.songs[0].ar[0].name,res.songs[0].al.picUrl))
      }).catch(err=>{
        console.log(err);
      })
    }
  }
  render() {
    const { src,anthor,name,paused,cover } = this.props;
    console.log(this.props)
    return (
        <Card className="footer">
          <ListItem button style={{padding:'0'}}>
            <CardMedia
              className="media"
              image={cover}
              title="Live from space album cover"
            />
            <div className="w-100 between">
              <div className="column pl-2 pr-2">
                <span >{anthor}</span>
                <span className="font-md">{name}</span>
              </div>
              <div className="flex pr-4">
                <span onClick={(e)=>{this.setPaused(e)}} className={!paused?'icon-bofang iconfont block pl-2 pr-2 font-7x':'icon-zanting iconfont block pl-2 pr-2 font-7x'}></span>
                <span className="iconfont icon-bofangliebiao block pl-2 pr-2 font-5x"></span>
              </div>
            </div>
          </ListItem>
          <audio id="audio" src={src} autoPlay="autoplay" style={{display:'none'}} paused={paused+''}>
            您的浏览器不支持 audio 标签。
          </audio>
        </Card>
    );
  }
}
const mapStateToProps = state => {
  return {
      src: state.src,
      anthor: state.anthor,
      name: state.name,
      cover: state.cover,
      paused: state.paused
  }
};
export default connect(mapStateToProps)(Footer);