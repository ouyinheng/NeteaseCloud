import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { getHot, toSearch } from '../../../request/http.request'
import OInput from '../../../components/oyh/input';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TopBar from '../../../components/oyh/topBar';
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotNode: '',
      localNode:'',
      inputValue: '',
      local:'',
      border:''
    };
    // this.toSearch = this.toSearch.bind(this)
    this.goBack = this.goBack.bind(this);
    this.getInputValue = this.getInputValue.bind(this);
    this.submit = this.submit.bind(this);
    this.del = this.del.bind(this);
    this.getfocus = this.getfocus.bind(this);
    this.getblur = this.getblur.bind(this);
  }
  goBack(){
    window.history.go(-1)
  }
  getInputValue(value){
    let inputValue = value;
    this.setState({ inputValue })
  }
  submit(e){
    e.preventDefault();
    var value = this.state.inputValue;
    var arr = [];
    var svalue = localStorage.getItem(`search`);
    if(svalue){
      arr.push(...JSON.parse(svalue));
    }
    arr.push(value)
    arr = Array.from(new Set(arr))
    localStorage.setItem(`search`, JSON.stringify(arr));
    toSearch(value).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }
  del(e,index){
    this.state.local.splice(index,1);
    var local = this.state.local;
    this.setState({local})
    localStorage.setItem('search',JSON.stringify(local))
    const localNode = this.renderLocal(local);
    this.setState({localNode,local})
  }
  componentDidMount(){
    getHot().then(res=>{
      if(res.code === 200) {
        const hotNode = this.renderHot(res.result.hots);
        this.setState({
          hotNode: hotNode
        })
      }
    }).catch(err=>{
      console.log(err)
    })
    let local = localStorage.getItem('search');
    if(local){
      local=JSON.parse(local);
      const localNode = this.renderLocal(local);
      this.setState({localNode,local})
    }
  }
  getfocus(){
    const border = this.renderInput(true)
    this.setState({border})
  }
  getblur(){
    const border = this.renderInput(false)
    this.setState({border})
  }
  renderHot(data){
    return data.map((item,index)=>{
      return (
        <div variant="outlined" className="hot-tips" key={index}>
          <ListItem button style={{padding:'0'}}>{item.first}</ListItem>
        </div>
      )
    })
  }
  renderLocal(data){
    return data.map((item,index)=>{
      return ( 
          <div className="list-item w-100 between border-bottom" key={index}>
            <ListItem button>
              <span className="iconfont icon-time font-gray"></span>
              <div style={{fontSize:'0.8rem',padding: '0 10px'}}>{item}</div>
            </ListItem>
            <div style={{fontSize:'0.6rem'}} className="iconfont icon-guanbi font-gray" onClick={(e)=>{this.del(e,index)}}></div>
          </div>
      )
    })
  }
  renderInput(data){
      if(data){
        return (
          <div className="input-bottom"></div>
        )
      } else {
        return null;
      }
  }
  render() {
    return (
            <div className="Search">
                <form className="search-header" onSubmit={this.submit}>
                  <TopBar>
                    <div className="outinput">
                      <OInput 
                        tochange={this.getInputValue}
                      />
                    </div>
                  </TopBar>
                </form>
                <section className="search-section">
                  <ListItem button className="classify border-bottom">
                      <Link to="/app/singer" className="center">
                        <span className="iconfont icon-team"></span>
                        <span>歌手分类</span>
                        <span className="iconfont icon-right"></span>
                      </Link>
                  </ListItem>
                  <div className="search-hot">
                    <div className="hot-title">热门搜索</div>
                    <div className="tips">
                      { this.state.hotNode }
                    </div>
                  </div>
                  <List component="nav" className="localHistory-group">
                    { this.state.localNode }
                  </List>
                </section>
            </div>
    );
  }
}

export default Search;