import React,{Component} from 'react';
import {BrowserRouter ,Route,Switch} from 'react-router-dom';
import Login from './pages/login';
import App from './App';
import Util from './utils/utils'
import Music from './pages/music'
import Search from './pages/search'
export default class IRouter extends Component {

    componentWillMount(){
        Util.noBug();
    }
    render(){
        return (
            <BrowserRouter>
                <div style={{width:"100%",height:"calc(100vh)"}}>
                    <Switch>
                        <Route exact={true} path="/home" component={Login}/>
                        <Route path="/admin" render={()=>
                            <App>
                                <Route path="/admin/music" component={Music}/>
                            </App>
                        }/>
                        <Route exact={true} path="/search" component={Search}/>
                    </Switch>
                </div>
            </BrowserRouter >
        )
    }
} 