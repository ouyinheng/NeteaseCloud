import React,{Component} from 'react';
import './index.scss';  
import ListItem from '@material-ui/core/ListItem';

export default class Tabs extends Component {
    constructor(props){
        super(props);
        this.state = {
            tablabel:'',
            active:0,
            tabName:'',
            content:''
        }
        this.setActive = this.setActive.bind(this);
    }
    setActive(active){
        let tablabel = this.renderTab(this.state.tabName,active);
        this.setState({tablabel});
        this.props.setActive(active)
    }
    renderTab(data,active){
        this.setState({active})
        return data.map((item,index)=>{
            return (
                 <ListItem button key={index} onClick={(e)=>{this.setActive(index)}} ><span className={active===index?'active':''}>{item.name}</span></ListItem>
            )
        })
    }
    componentWillMount(){
        let tabName = this.props.tabName;
        let tablabel = this.renderTab(tabName,0);
        this.setState({tablabel,tabName})
    }
    render(){
        return (
            <div className="tabs">
                { this.state.tablabel }
            </div>
        )
    }
} 