import React, { Component } from 'react';
import './App.scss';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Home from './pages/home/Home.js'
import Recomm from './pages/recomm/Recomm.js'
import Video from './pages/video/Video.js'

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
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
            <section className="container">
              <Route exact path="/" component={Home}/>
              <Route exact path="/recomm" component={Recomm}/>
              <Route exact path="/video" component={Video}/>
            </section>
            <footer className="control"></footer>
          </div>  
        </Router>
    );
  }
}

export default App;