import React,{Component} from 'react';
import './index.scss';  
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
export default class Login extends Component {

    render(){
        return (
            <div className="login">
                <header className="login-header">
                    <span className="iconfont icon-wangyi"></span>
                </header>
                <section className="login-section">
                    <Button className="login-btn">
                        手机号登录
                    </Button>
                    <Button className="login-btn">
                        注册
                    </Button>
                    <Link to="/app/admin/recom/recommend" className="login-link">游客试用</Link>
                </section>
                <div style={{textAlign:'center',marginBottom:'10px'}}>其他方式登录</div>
                <footer className="login-footer">
                    <Link to="/email" ><span className="iconfont icon-weixin"></span></Link>
                    <Link to="/email" ><span className="iconfont icon-QQ"></span></Link>
                    <Link to="/email" ><span className="iconfont icon-weibo"></span></Link>
                    <Link to="/email" ><span className="iconfont icon-wangyi"></span></Link>
                </footer>
            </div>
        )
    }
} 