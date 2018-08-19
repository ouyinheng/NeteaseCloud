import React, { Component } from 'react';
import './index.scss';
import { getHot, toSearch } from '../../request/http.request'
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotNode: '',
      localNode:'',
      inputValue: '',
      local:''
    };
    // this.toSearch = this.toSearch.bind(this)
    this.goBack = this.goBack.bind(this);
    this.setInputValue = this.setInputValue.bind(this);
    this.submit = this.submit.bind(this);
    this.del = this.del.bind(this);
  }
  goBack(){
    window.history.go(-1)
  }
  setInputValue(e){
    let inputValue = e.target.value;
    this.setState({
      inputValue
    })
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
    console.log(index)
    this.state.local.splice(1,index);
    localStorage.setItem('search',this.state.local)
    this.renderLocal(this.state.local)
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
    if(local){
      local=JSON.parse(local);
      const localNode = this.renderLocal(local);
      this.setState({localNode,local})
    }
    console.log(local)
    
  }
  renderHot(data){
    return data.map((item,index)=>{
      return (
        <span className="hot-tips" key={index}>{item.first}</span>
      )
    })
  }
  renderLocal(data){
    return data.map((item,index)=>{
      return ( 
        <div className="localHistory-item" key={index}>
          <span className="iconfont icon-time font-gray"></span>
          <div className="local-left">
            <div style={{fontSize:'16px'}}>{ item }</div>
            <div style={{fontSize:'14px'}} className="iconfont icon-guanbi font-gray" onClick={(e)=>{this.del(e,index)}}></div>
          </div>
        </div>
      )
    })
  }
  render() {
    return (
        <div className="Search">
          <form className="search-header" onSubmit={this.submit}>
            <span className="iconfont icon-arrowleft" onClick={this.goBack}></span>
            <input placeholder="哈哈哈哈" value={this.state.inputValue}  onChange={this.setInputValue}/>
          </form>
          <section className="search-section">
            <div className="classify border-1">
                <div className="center">
                  <span className="iconfont icon-team"></span>
                  <span>歌手分类</span>
                  <span className="iconfont icon-right"></span>
                </div>
            </div>
            <div className="search-hot">
              <div className="hot-title">热门搜索</div>
              <div className="tips">
                { this.state.hotNode }
              </div>
            </div>
            <div className="localHistory-group">
              { this.state.localNode }
            </div>
          </section>
        </div>
    );
  }
}

export default Search;