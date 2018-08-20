import React,{Component} from 'react';
import './index.scss';  
import { Link } from 'react-router-dom';
export default class Login extends Component {

    render(){
        return (
            <div className="login">
                <header className="login-header">
                    <span className="iconfont icon-wangyi"></span>
                </header>
                <section className="login-section">
                    <div className="login-btn">手机号登录</div>
                    <div className="login-btn">注册</div>
                    <Link to="/admin" className="login-link">游客试用</Link>
                </section>
                <div style={{textAlign:'center',marginBottom:'10px'}}>其他方式登录</div>
                <footer className="login-footer">
                    <span className="iconfont icon-weixin"></span>
                    <span className="iconfont icon-QQ"></span>
                    <span className="iconfont icon-weibo"></span>
                    <Link to="/email" className="iconfont icon-wangyi"></Link>
                </footer>
            </div>
        )
    }
} 