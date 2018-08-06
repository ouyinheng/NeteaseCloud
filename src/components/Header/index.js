import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
class Header extends Component {
    render() {
        return (
            <Router>
                <div>
                    <header className="nav">
                        <div className="left">
                            <span className="iconfont icon-view-list-o"></span>
                        </div>
                        <div className="center">
                            <Link to="/">
                                <span className="iconfont icon-yinle"></span>
                            </Link>
                            <Link to="/recomm">
                                <span className="iconfont icon-wangyiyunyinlezizhi-copy"></span>
                            </Link>
                            <Link to="/video">
                                <span className="iconfont icon-shipin"></span>
                            </Link>
                        </div>
                        <div className="right">
                            <span className="iconfont icon-sousuo"></span>
                        </div>
                    </header>
                </div>
            </Router>
        )
    }
}
export default Header