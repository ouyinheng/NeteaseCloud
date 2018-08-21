import React,{Component} from 'react';
import './index.scss';  
import TopBar from '../../../../components/oyh/topBar';

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
            <div className="SingerDetails" style={{backgroundImage: 'url('+this.state.params.imgurl+')'}}>
                <header className="SingerDetails-header">
                    <TopBar color={{background:'transparent'}}>
                        <span className="SingerDetails-header-title">{ this.state.params.name }</span>
                    </TopBar>
                </header>
            </div>
            
        )
    }
} 