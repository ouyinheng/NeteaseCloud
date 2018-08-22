import React,{Component} from 'react';
import './index.scss';  
import TopBar from '../../../../components/oyh/topBar';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';

export default class SingerDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            params: {
                id: 6452,
                imgurl: "http://p4.music.126.net/ql3nSwy0XKow_HAoZzRZgw==/109951163111196186.jpg",
                name: '周杰伦'
            }
        }
        
    }

    renderListNode(data) {
        return data.map((item,index)=>{
            return (
                <div className="SingerList-list" key={index}>
                    
                </div>
            )
        })
    }
    componentWillMount(){
        var params = this.props.location.query || this.state.params;
        console.log(params)
        this.setState({params})
    }
    render(){
        return (
                <div className="SingerDetails">
                    <header className="SingerDetails-header">
                        <TopBar color={{background:'transparent'}}>
                            <span className="SingerDetails-header-title">{ this.state.params.name }</span>
                        </TopBar>
                    </header>
                    <section className="SingerDetails-section">
                        <div className="SingerDetails-section-collect" style={{backgroundImage: 'linear-gradient(rgba(144,144,144,0.2), rgba(40,40,40, 0.2)),url('+this.state.params.imgurl+')'}}>
                           <div className="clection">
                                <Button>
                                    <span>+</span>
                                    <div>收藏</div>
                                </Button>
                           </div>
                        </div>
                        <article  className="SingerDetails-section-article">
                            <nav className="SingerDetails-section-article-nav">
                                <ListItem button><span>热门演唱</span></ListItem>
                                <ListItem button><span>专辑</span></ListItem>
                                <ListItem button><span>视频</span></ListItem>
                                <ListItem button><span>艺人信息</span></ListItem>
                            </nav>
                            <div className="SingerDetails-section-content">

                            </div>
                        </article>
                    </section>
                </div>
        )
    }
} 