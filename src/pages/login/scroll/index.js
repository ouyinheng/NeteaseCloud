import React,{Component} from 'react';
import './index.scss';
class Scroll extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.onScroll = this.onScroll.bind(this);
  }
  onScroll(e){
    console.log(this.refs.scroll.offsetTop-this.refs.out.scrollTop)
    console.log()
  }
  render() {
    return (
      <div className="out" ref="out" onScroll={(e)=>{this.onScroll(e)}}>
        <div className="scroll" ref="scroll"></div>
      </div>
    )
  }
}
export default Scroll;