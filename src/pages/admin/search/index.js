import React, { Component } from 'react';
import './index.scss';
import { getHot, toSearch } from '../../../request/http.request'
import OInput from '../../../components/oyh/input';
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
        <span className="hot-tips" key={index}>{item.first}</span>
      )
    })
  }
  renderLocal(data){
    return data.map((item,index)=>{
      return ( 
        <div className="localHistory-item" key={index}>
          <span className="iconfont icon-time font-gray"></span>
          <div className="local-left border-bottom">
            <div style={{fontSize:'16px'}}>{ item }</div>
            <div style={{fontSize:'14px'}} className="iconfont icon-guanbi font-gray" onClick={(e)=>{this.del(e,index)}}></div>
          </div>
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
            <span className="iconfont icon-arrowleft" onClick={this.goBack}></span>
            <div className="outinput">
              {/* <input onFocus={this.getfocus} onBlur={this.getblur} placeholder="哈哈哈哈" value={this.state.inputValue}  onChange={this.setInputValue}/>
              { this.state.border } */}
              <OInput 
                tochange={this.getInputValue}
              />
            </div>
          </form>
          <section className="search-section">
            <div className="classify border-bottom">
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