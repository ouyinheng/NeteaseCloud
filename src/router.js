import React,{Component} from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import Login from './pages/login';
import App from './App';
import Util from './utils/utils'
export default class IRouter extends Component {

    componentWillMount(){
        Util.noBug();
    }
    render(){
        return (
            <HashRouter>
                <div style={{width:"100%",height:"calc(100vh)"}}>
                    <Switch>
                        <Route exact={true} path="/home" component={Login}/>
                        <Route path="/" component={App}/>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
} 