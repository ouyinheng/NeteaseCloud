import React,{ Component } from 'react';
import './index.scss';
import { connect } from 'react-redux'; 
import TopBar from '../../../components/oyh/topBar';
import { getdetail,getlyric } from '../../../request/http.request'
import { switchPaused } from '../../../redux/action';
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            name:'',
            anthor:''
        }
        this.setPaused = this.setPaused.bind(this);
    }
    componentDidMount(){
        const { id,anthor,name } = this.props;
        console.log(id,name,anthor)
        this.setState({
            id,
            name,
            anthor
        })
        getdetail(id).then(res=>{
            console.log(res)
        }).catch(err=>{

        })
        getlyric(id).then(res=>{
            console.log(res)
        }).catch(err=>{

        })
    }
    setPaused(){
        let audio = document.getElementById('audio');
        const { dispatch,paused } = this.props;
        paused && audio.pause();
        !paused && audio.play();
        dispatch(switchPaused(!paused))
    }
    // componentDidMount(){
    //     let hisMusic = localStorage('musicHistory')
    //     if(hisMusic){
    //         let first = JSON.parse(hisMusic)[0];

    //     }
    // }
    render(){
        const { paused } = this.props;
        return (
            <div className="details">
                <header className="details-header">
                    <TopBar color={{background:'transparent'}}>
                        <div className="column text">
                            <span className="name text">{this.state.name}</span>
                            <span className="anthor font-sm font-md text">{this.state.anthor}</span>
                        </div>
                    </TopBar>
                </header>
                <section className="details-section">

                </section>
                <footer className="details-footer around">
                    <span className="iconfont icon-xunhuan font-7x"></span>
                    <span className="iconfont icon-prev font-sx"></span>
                    <span className={!paused?'iconfont icon-bofang font-sx':'iconfont font-sx icon-zanting'} onClick={this.setPaused}></span>
                    <span className="iconfont icon-xiayishou font-7x"></span>
                    <span className="iconfont icon-bofangliebiao font-7x"></span>
                </footer>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        id: state.id,
        anthor: state.anthor,
        name: state.name,
        paused: state.paused
    }
}
export default connect(mapStateToProps)(Details);