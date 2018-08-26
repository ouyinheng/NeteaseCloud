import React,{Component} from 'react';
import './index.scss';  
import OInput from '../../../components/oyh/input';
import { toLogin } from '../../../request/http.request';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
export default class Email extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            pwd:''
        }
        this.tosubmit = this.tosubmit.bind(this);
        this.getUserName = this.getUserName.bind(this);
        this.getPwd = this.getPwd.bind(this);
        this.goBack = this.goBack.bind(this);
    }
    static contextTypes = {
        router: PropTypes.object.isRequired,
    }
    tosubmit(e){
        e.preventDefault();
        let params = {
            username: this.state.username,
            pwd: this.state.pwd
        }
        toLogin(params).then(res=>{
            console.log(res)
            if(res.code=== 200){
                localStorage.setItem('token',JSON.stringify(res));
                // window.history.push('/admin')
                this.context.router.history.push('/app/admin/recom/recommend')
            }
        }).catch(err=>{
            console.log(err)
        })
    }
    getUserName(value){
        this.setState({
            username: value
        })
    }
    getPwd(value){
        this.setState({
            pwd: value
        })
    }
    goBack(){
        window.history.go(-1);
    }
    render(){
        return (
            <div className="email">
                <form onSubmit={this.tosubmit}>
                    <header className="email-header">
                        <span className="iconfont icon-arrowleft" onClick={this.goBack}></span>
                        <span>网易邮箱账号登录</span>
                    </header>
                    <section className="email-section">
                        <div className="email-input">
                            <span className="iconfont icon-45 email-icon"></span>
                            <OInput tochange={this.getUserName}/>
                        </div>
                        <div className="email-input">
                            <span className="iconfont icon-suo email-icon"></span>
                            <OInput tochange={this.getPwd}/>
                        </div>
                        <div className="email-submit"></div>
                    </section>
                    <footer className="email-footer">
                        {/* <div className="email-submit" onClick={this.tosubmit} >登录</div> */}
                        <Button variant="contained" color="secondary" onClick={this.tosubmit} className="email-submit">
                        登录
                        </Button>
                    </footer>
                </form>
            </div>
            
        )
    }
} 