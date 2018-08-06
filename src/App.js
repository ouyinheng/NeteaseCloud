import React, { Component } from 'react';
import './App.scss';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Home from './pages/Home'
import substance from './pages/substance'
import Video from './pages/Video'
import Search from './pages/Search'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearch: false
    };
    this.toSearch = this.toSearch.bind(this)
  }
  toSearch(newState){
    this.setState({
      isSearch: newState
    })
  }
  render() {
    return (
        <Router>
          <div className="App">
            <header className="nav">
                <div className="left">
                  <span className="iconfont icon-view-list-o"></span>
                </div>
                <div className="center">
                  <Link to="/home">
                    <span className="iconfont icon-yinle"></span>
                  </Link>
                  <Link to="/">
                    <span className="iconfont icon-wangyiyunyinlezizhi-copy"></span>
                  </Link>
                  <Link to="/video">
                    <span className="iconfont icon-shipin"></span>
                  </Link>
                </div>
                <div className="right">
                  <span className="iconfont icon-sousuo" onClick={this.toSearch}></span>
                </div>
            </header>
            <section className="container">
              <Route exact path="/home" component={Home}/>
              <Route exact path="/" component={substance}/>
              <Route exact path="/video" component={Video}/>
              <Route exact path="/Search" component={Search}/>
            </section>
            <footer className="control"></footer>
            <Search isSearch={this.state.isSearch} closeSearch={this.toSearch}></Search>
          </div>  
        </Router>
    );
  }
}

export default App;