import React,{ Component } from 'react';
import './index.scss';
import TopBar from '../../../../components/oyh/topBar';
import ListItem from '@material-ui/core/ListItem';
import Modal from '../../../../components/oyh/modal';

export default class Singer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clslistnode:'',
            clslist: [{
                name: '华语男歌手',key:'1001'
            },{
                name: '华语女歌手',key:'1002'
            },{
                name: '华语乐队/组合',key:'1003'
            },{
                name: '欧美男歌手',key:'2001'
            },{
                name: '欧美女歌手',key:'2002'
            },{
                name: '欧美乐队/组合',key:'2003'
            },{
                name: '日本男歌手',key:'6001'
            },{
                name: '日本女歌手',key:'6002'
            },{
                name: '日本乐队/组合',key:'6003'
            },{
                name: '韩国男歌手',key:'7001'
            },{
                name: '韩国女歌手',key:'7002'
            },{
                name: '韩国乐队/组合',key:'7003'
            },{
                name: '其他男歌手',key:'4001'
            },{
                name: '其他女歌手',key:'4002'
            },{
                name: '其他乐队/组合',key:'4003'
            }]
        }
        this.todetail = this.todetail.bind(this);
    }
    renderListNode(data){
        return data.map((item,index)=>{
            return (
                <div className="singer-section-card-item border-bottom" key={index}>
                    <ListItem button onClick={(e)=>{this.todetail(e,item.key,item.name)}}>{item.name}</ListItem>
                </div>
            )
        })
    }
    todetail(e,key,name){
        // this.context.router.history.push(`/search/singer/singerlist?key=${key}&name=${name}`)
        this.props.history.push("/search/singer/singerlist/"+key+"/"+name)
    }
    componentWillMount(){
        
        const clslistnode = this.renderListNode(this.state.clslist);
        this.setState({clslistnode})
    }
    render(){
        return (
            <Modal>
                <div className="singer">
                    <header className="singer-header">
                        <TopBar>
                            <span className="singer-header-title">歌手分类</span>
                        </TopBar>
                    </header>
                    <section className="singer-section">
                        <div className="singer-section-card">
                            { this.state.clslistnode }
                        </div>
                    </section>
                </div>
            </Modal>
        )
    }
}