
import React,{ Component } from 'react';
import './index.scss';
import Tabs from '../tabs'
class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab:[
                {name:'热门演唱',key:'/singerdetails/popsing'},
                {name:'专辑',key:'/singerdetails/popsing'},
                {name:'视频',key:'/singerdetails/popsing'},
                {name:'艺人信息',key:'/singerdetails/popsing'}
            ],
        }
        this.setActive = this.setActive.bind(this)
    }
    setActive(){
        
    }
    render(){
        return (
            <div className="table">
                <Tabs
                    className="tabs"
                    tabName={this.state.tab}
                    setActive={this.setActive}
                />
                <section className="section">

                </section>
            </div>
        )
    }
}
export default Table;
