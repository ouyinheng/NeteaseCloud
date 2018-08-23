import React, { Component } from 'react';
import './index.scss';
import ListItem from '@material-ui/core/ListItem';

export default class Leftmunu extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }
  componentWillMount(){
        console.log(this.props)
  }
  render() {
    return (
        <div className="Leftmunu">
           {
               this.props.userinfo &&
               <header className="Leftmunu-header " style={{backgroundImage:'url('+this.props.userinfo.profile.backgroundUrl+')'}}>
                    <div className="out">
                        <img className="Leftmunu-header-icon" src={this.props.userinfo.profile.avatarUrl} alt="ll"/>
                        <div className="between w-100">
                            <div className="name">
                                <span>{this.props.userinfo.profile.nickname}</span>
                                <span className="Lv">Lv.{this.props.userinfo.profile.vipType}</span>
                            </div>
                            <span className="iconfont icon-jifen signin"> 签到</span>
                        </div>
                    </div>
                </header>
           }
           <section className="Leftmunu-section">
                <div className="Leftmunu-section-card">
                    <ListItem button>
                        <span className="iconfont icon-xiaoxi Leftmunu-section-card-icon"></span>
                        <span className="Leftmunu-section-card-title">我的消息</span>
                    </ListItem>
                    <ListItem button>
                        <span className="iconfont icon-huiyuanzhongxin Leftmunu-section-card-icon"></span>
                        <span className="Leftmunu-section-card-title">会员中心</span>
                    </ListItem>
                    <ListItem button>
                        <span className="iconfont icon-shangcheng Leftmunu-section-card-icon"></span>
                        <span className="Leftmunu-section-card-title">商城</span>
                    </ListItem>
                    <ListItem button>
                        <span className="iconfont icon-youxituijian Leftmunu-section-card-icon"></span>
                        <span className="Leftmunu-section-card-title">游戏推荐</span>
                    </ListItem>
                    <ListItem button>
                        <span className="iconfont icon-gengduo_tinggemianliuliang_ Leftmunu-section-card-icon"></span>
                        <span className="Leftmunu-section-card-title">在线听歌免流量</span>
                    </ListItem>
                </div>
                <div className="Leftmunu-section-card">
                    <ListItem button>
                        <span className="iconfont icon-haoyou Leftmunu-section-card-icon"></span>
                        <span className="Leftmunu-section-card-title">我的好友</span>
                    </ListItem>
                    <ListItem button>
                        <span className="iconfont icon-fujinderen Leftmunu-section-card-icon"></span>
                        <span className="Leftmunu-section-card-title">附近的人</span>
                    </ListItem>
                </div>
                <div className="Leftmunu-section-card">
                    <ListItem button>
                        <span className="iconfont icon-huanfu Leftmunu-section-card-icon"></span>
                        <span className="Leftmunu-section-card-title">个性换肤</span>
                    </ListItem>
                    <ListItem button>
                        <span className="iconfont icon-tinggeshiqu40x40 Leftmunu-section-card-icon"></span>
                        <span className="Leftmunu-section-card-title">听歌识曲</span>
                    </ListItem>
                    <ListItem button>
                        <span className="iconfont icon-dingshi Leftmunu-section-card-icon"></span>
                        <span className="Leftmunu-section-card-title">定时停止播放</span>
                    </ListItem>
                    <ListItem button>
                        <span className="iconfont icon-richscan_icon Leftmunu-section-card-icon"></span>
                        <span className="Leftmunu-section-card-title">扫一扫</span>
                    </ListItem>
                    <ListItem button>
                        <span className="iconfont icon-clock Leftmunu-section-card-icon"></span>
                        <span className="Leftmunu-section-card-title">音乐闹钟</span>
                    </ListItem>
                    <ListItem button>
                        <span className="iconfont icon-jiashimoshi36 Leftmunu-section-card-icon"></span>
                        <span className="Leftmunu-section-card-title">驾驶模式</span>
                    </ListItem>
                    <ListItem button>
                        <span className="iconfont icon-yunpan Leftmunu-section-card-icon"></span>
                        <span className="Leftmunu-section-card-title">音乐云盘</span>
                    </ListItem>
                </div>
           </section>
           <footer className="Leftmunu-footer border-top around">
                <ListItem button>
                    <div className="around -center w-100">
                        <span className="iconfont icon-yejianmoshi icon"></span>
                        <span className="">  夜间模式</span>
                    </div>
                </ListItem>
                <ListItem button>
                    <div className="around -center w-100">
                        <span className="iconfont icon-shezhi  icon"></span>
                        <span className="">  设置</span>
                    </div>
                </ListItem>
                <ListItem button>
                    <div className="around -center w-100">
                        <span className="iconfont icon-tuichu  icon"></span>
                        <span className="">  退出</span>    
                    </div>
                </ListItem>
           </footer>
        </div>
    );
  }
}