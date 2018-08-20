import React,{Component} from 'react';
import {BrowserRouter ,Route,Switch} from 'react-router-dom';
import Login from './pages/login';
import Email from './pages/login/email';

import App from './App';
import Music from './pages/admin/music'
import Recom from './pages/admin/recom'
import Mv from './pages/admin/mv'
import Search from './pages/admin/search'



import Util from './utils/utils'
export default class IRouter extends Component {
    
    componentWillMount(){
        Util.noBug();
    }
    render(){
        return (
            <BrowserRouter>
                <div style={{width:"100%",height:"calc(100vh)"}}>
                    <Switch>
                        <Route exact={true} path="/" component={Login}/>
                        <Route path="/email" component={Email}/>
                        <Route path="/admin" render={()=>
                            <App>
                                <Route path="/admin/music" component={Music}/>
                                <Route path="/admin/" component={Recom}/>
                                <Route path="/admin/mv" component={Mv}/>
                            </App>
                        }/>
                        <Route exact={true} path="/search" component={Search}/>
                    </Switch>
                </div>
            </BrowserRouter >
        )
    }
} 