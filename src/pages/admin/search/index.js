import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { getHot, toSearch } from '../../../request/http.request'
import OInput from '../../../components/oyh/input';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
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
    localStorage.setItem(`search`, JSON.stringify(arr));
    toSearch(value).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }
  del(e,index){
    this.state.local.splice(index,1);
    console.log(index,this.state.local)
    var local = this.state.local;
    this.setState({local})
    localStorage.setItem('search',JSON.stringify(local))
    const localNode = this.renderLocal(local);
    this.setState({localNode,local})
  }
  componentWillMount(){
    getHot().then(res=>{
      console.log(res.result);
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
    console.log('localhisttory',local)
    if(local){
      local=JSON.parse(local);
      const localNode = this.renderLocal(local);
      this.setState({localNode,local})
    }
  }
  getfocus(){
    console.log('asdf')
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
        <Button variant="outlined" className="hot-tips" key={index}>
          {item.first}
        </Button>
      )
    })
  }
  renderLocal(data){
    return data.map((item,index)=>{
      return ( 
          <ListItem button className="list-item flex -center border-bottom" key={index}>
            <span className="iconfont icon-time font-gray"></span>
            <ListItemText primary={item}/>
            <div style={{fontSize:'14px'}} className="iconfont icon-guanbi font-gray" onClick={(e)=>{this.del(e,index)}}></div>
          </ListItem>
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
                <Link to="/search/singer" className="center">
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