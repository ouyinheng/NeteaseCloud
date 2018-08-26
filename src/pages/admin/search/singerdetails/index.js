import React,{Component} from 'react';
import './index.scss';  
import TopBar from '../../../../components/oyh/topBar';
import ListItem from '@material-ui/core/ListItem';
import { getArtists, getArtistsDesc, getArtistsAlbum, getArtistsMV } from '../../../../request/http.request';
import Tabs from '../../../../components/oyh/tabs';
import { connect } from 'react-redux'
import { switchSRC } from '../../../../redux/action'
class SingerDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:'',
            artist:'',
            tab:[
                {name:'热门演唱',key:'/singerdetails/popsing'},
                {name:'专辑',key:'/singerdetails/popsing'},
                {name:'视频',key:'/singerdetails/popsing'},
                {name:'艺人信息',key:'/singerdetails/popsing'}
            ],
            active:'',
            hotSongs:'',
            desc:'',
            album:'',
            mvs:'',
            list:'',
            bool:false
        }
        this.setActive = this.setActive.bind(this)
        this.setSrc = this.setSrc.bind(this);
    }
    setActive(active){
        this.setState({active})
        switch(active){
            case 0: 
                const list1 = this.renderList(this.state.hotSongs);
                this.setState({list:list1})
                break;
            case 1: 
                const list2 = this.renderAlbum(this.state.album);
                this.setState({list:list2})
                break;
            case 2: 
                const list3 = this.renderMV(this.state.mvs);
                this.setState({list:list3})
                break;
            case 3: 
                const list4 = this.renderDesc(this.state.desc);
                this.setState({list:list4})
                break;
            default:
                break;
        }
    }
    setSrc(params,author,name) {
        const { dispatch } = this.props;
        dispatch(switchSRC(params,author,name))
    }
    componentDidMount(){
        var id = this.props.match.params.id;
        this.setState({id})
        getArtists(id).then(res=>{
            this.setState({
                artist: res.artist,
                hotSongs: res.hotSongs
            })
        }).then(_=>{
            let list = this.renderList(this.state.hotSongs);
            this.setState({list})
        }).then(_=>{
            getArtistsDesc(id).then(res=>{
                this.setState({
                    desc: res
                })
            }).then(_=>{
                // 获取歌手专辑
                getArtistsAlbum({id:id,limit:10}).then(res=>{
                    res.hotAlbums.map(item=>{
                        var timer= new Date(item.publishTime);
                        timer = timer.getFullYear()+'.'+timer.getMonth()+'.'+timer.getDay()+' ';
                        item.publishTime = timer;
                        return null;
                    })
                    this.setState({
                        album: res.hotAlbums
                    })
                }).then(_=>{
                    getArtistsMV(id).then(res=>{
                        console.log(res)
                        this.setState({
                            mvs: res.mvs
                        })
                    }).then(_=>{
                        setTimeout(_=>{
                            this.setState({
                                bool: true
                            })
                        },500)
                    })
                })
            })
        }).catch(err=>{
            console.log(err)
        })
    }
    renderList(data){
        return data.map((item,index)=>{
            return (
                <ListItem button key={index} style={{padding: '0'}} onClick={(e)=>{this.setSrc(item.id,item.name,item.ar[0].name)}}>
                    <div className="list-item">
                        <div style={{color:'gray',fontSize:'20px',padding:'0 10px'}}>{index}</div>
                        <div className="list-item-content border-bottom">
                            <div className="list-item-content-left">
                                <span>{item.name}</span>
                                <span>{item.ar[0].name+' - '+item.al.name}</span>
                            </div>
                            <div className="list-item-content-right">
                                <span className="iconfont icon-MV-"></span>
                                <span className="iconfont icon-xuanxiang"></span>
                            </div>
                        </div>
                    </div>
                </ListItem>
            )
        })
    }
    renderAlbum(data){
        return data.map((item,index)=>{
            return (
                <ListItem button key={index} style={{padding:'0'}}>
                    <div className="album-items">
                        <img src={item.picUrl} alt="ll"/>
                        <div className="album-items-intro">
                            <span className="">{item.name}</span>
                            <span className="">{item.publishTime+' 歌曲 '+item.size}</span>
                        </div>
                    </div>
                </ListItem>
            )
        })
    }
    renderMV(data){
        return data.map((item,index)=>{
            return (
                <ListItem button key={index} style={{padding:'0'}}>
                    <div className="album-items">
                        <img src={item.imgurl} alt="ll" style={{width:'100px'}}/>
                        <div className="album-items-intro">
                            <span className="">{item.name}</span>
                            <span className="">{item.publishTime+' 歌曲 '+item.size}</span>
                        </div>
                    </div>
                </ListItem>
            )
        })
    }
    renderDesc(data) {
        return (
            <div className="SingerList-desc">
                <p>{this.state.artist.name}简介</p>
                <p>{data.briefDesc}</p>
                <p>相关专栏文章</p>
                {data.topicData.map((item,index)=>{
                    return (
                        <ListItem button key={index} style={{padding:'0'}}>
                           <div className="special">
                               <img className="pageimg" src={item.rectanglePicUrl} alt="ll"/>
                                <div>
                                    <p>{item.mainTitle} </p>
                                    <p>{'by '+item.creator.nickname+' 阅读 '+item.readCount} </p>
                                </div>  
                            </div> 
                        </ListItem>
                    )
                })}
            </div>
        )
    }
    render(){
        return (
            <div>
                {  this.state.bool &&
                    <div className="SingerDetails" style={{backgroundImage: 'linear-gradient(rgba(144,144,144,0.2), rgba(40,40,40, 0.2)),url('+this.state.artist.picUrl+')'}}>
                        <header className="SingerDetails-header">
                            <TopBar color={{background:'transparent'}}>
                                <span className="SingerDetails-header-title">{ this.state.artist.name }</span>
                            </TopBar>
                        </header>
                        <div className="SingerDetails-collect">
                            <div className="clection">
                                <div>
                                    <ListItem button style={{padding:'3px 0'}}>
                                        <span>+</span>
                                        <div>收藏</div>
                                    </ListItem>
                                </div>
                            </div>
                        </div>
                        <section className="SingerDetails-section">
                            <div className="touming"></div>
                            <article  className="SingerDetails-section-article">
                                <Tabs
                                    tabName={this.state.tab}
                                    setActive={this.setActive}
                                />
                                <div className="SingerDetails-section-article-content">
                                    { this.state.list }
                                </div>
                            </article>
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
        )
    }
} 
export default connect()(SingerDetails);