import React,{Component} from 'react';
import './index.scss';  
import { singerlist } from '../../../../request/http.request';
import TopBar from '../../../../components/oyh/topBar';
import ListItem from '@material-ui/core/ListItem';

export default class SingerList extends Component {
    constructor(props){
        super(props);
        this.state = {
           singerlist:'',
           match:{
            key: "1001",
            name: "华语男歌手"
           },
           bool: false
        }
        this.todetails = this.todetails.bind(this);
    }
    todetails(id){
        this.props.history.push("/app/singerdetails/"+id)
    }
    renderListNode(data) {
        return data.map((item,index)=>{
            return (
                <div className="SingerList-list" key={index} onClick={(id)=>{this.todetails(item.id)}}>
                    <ListItem button>
                        <img className="SingerList-list-img" src={item.img1v1Url} alt="ll"/>
                        <div className="SingerList-list-name border-bottom">{item.name}</div>
                    </ListItem>
                </div>
            )
        })
    }
    componentDidMount(){
        let match=this.props.match.params||this.state.match;
        match && this.setState({match})
        singerlist(match.key).then(res=>{
            const singerlist = this.renderListNode(res.artists);
            this.setState({singerlist})
        }).then(_=>{
            setTimeout(_=>{
                this.setState({
                    bool: true
                })
            },500)
        }).catch(err=>{
            console.log(err)
        })
    }
    render(){
        return (
            <div>
                {
                    this.state.bool && 
                    <div className="SingerList">
                        <header className="SingerList-header">
                            <TopBar>
                                <span className="SingerList-header-title">{ this.state.match.name }-热门歌手</span>
                            </TopBar>
                        </header>
                        <section className="SingerList-section">
                            { this.state.singerlist }
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