import React,{ Component } from 'react';
import './index.scss';
import { playlistdetail } from '../../../../../request/http.request'
import TopBar from '../../../../../components/oyh/topBar'
import ListItem from '@material-ui/core/ListItem';
export default class SongListDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:'',
            list:'',
            nodeData:'',
            title:'歌单',
            bool:false
        }
    }

    getData(id){
        playlistdetail(id).then(res=>{
            console.log(res)
            const nodeData = this.renderList(res.playlist.tracks);
            this.setState({
                list: res,
                nodeData
            })

        }).catch(err=>{
            console.log(err)
        })
    }
    renderList(data){
        return data.map((item,index)=>{
            return (
                <ListItem button key={index} style={{padding: '0'}}>
                    <div className="flex w-100 outlist">
                        <div style={{padding: '0 10px'}}>{index}</div>
                        <div className="between w-100 left border-bottom">
                            <div className="title">
                                <span className="">{item.name}</span>
                                <span className="">{item.ar[0].name+' - '+item.al.name}</span>
                            </div>
                            <span className="iconfont icon-xuanxiang"></span>
                        </div>
                    </div>
                </ListItem>
            )
        })
    }
    componentWillMount(){
        let id = this.props.match.params.id;
        this.setState({id})
        playlistdetail(id).then(res=>{
            console.log(res)
            const nodeData = this.renderList(res.playlist.tracks);
            this.setState({
                list: res.playlist,
                nodeData
            })

        }).then(_=>{
            setTimeout(_=>{
                this.setState({
                    bool:true
                })
            },500)
        }).catch(err=>{
            this.setState({
                bool:true
            })
            console.log(err)
        })
    }
    render(){
        return (
            <div>
                {
                    this.state.bool && 
                    <div className="songlistDetails">
                        <header className="songlistDetails-header">
                            <TopBar color={{background:'transparent'}}>
                                <span className="songlistDetails-header-title">{this.state.title}</span>
                            </TopBar>
                        </header>
                        <section className="songlistDetails-section">
                            <div className="songlistDetails-section-header blur" style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.2), rgba(200,200,200, 0.2)),url('+this.state.list.coverImgUrl+')'}}>
                                <div className="songlistDetails-section-header-top w-100 flex -center">
                                    <img src={this.state.list.coverImgUrl} alt="ll" style={{width: '150px'}}/>
                                    <div>
                                        <p style={{fontSize:'20px',padding:'10px',color:'white'}}>{this.state.list.name}</p>
                                    </div>
                                </div>
                                <div className="songlistDetails-section-header-bottom"></div>
                            </div>
                            <article className="songlistDetails-section-article">
                                { this.state.nodeData }
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