import React,{Component} from 'react';
import './index.scss';  
import ListItem from '@material-ui/core/ListItem';

export default class Tabs extends Component {
    constructor(props){
        super(props);
        this.state = {
            tablabel:''
        }
        
    }
    renderTab(data){
        return data.map((item,index)=>{
            return (
                 <ListItem button key={index}><span>{item}</span></ListItem>
            )
        })
    }
    componentWillMount(){
        let tabName = this.props.tabName
        let tablabel = this.renderTab(tabName);
        this.setState({tablabel})
    }
    render(){
        return (
            <div className="tabs">
                <tablabel/>
            </div>
        )
    }
} 