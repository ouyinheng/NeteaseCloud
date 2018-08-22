import React,{Component} from 'react';
import {BrowserRouter ,Route,Switch} from 'react-router-dom';
// 登录
import Login from './pages/login';
    import Email from './pages/login/email';
// 主页
import App from './App';
    import Music from './pages/admin/music'
    import Recom from './pages/admin/recom'
        import Recommend from './pages/admin/recom/recommend'
        import Friend from './pages/admin/recom/friend'
        import Broad from './pages/admin/recom/broad'

    import Mv from './pages/admin/mv'

    import Search from './pages/admin/search'
        import Singer from './pages/admin/search/singer'
        import SingerList from './pages/admin/search/singerlist'
        import SingerDetails from './pages/admin/search/singerdetails'



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
                                <Route path="/admin/recom" render={()=>
                                    <Recom>
                                        <Route path="/admin/recom/recommend" component={Recommend}/>
                                        <Route path="/admin/recom/friend" component={Friend}/>
                                        <Route path="/admin/recom/broad" component={Broad}/>
                                    </Recom>
                                }/>
                                <Route path="/admin/mv" component={Mv}/>
                            </App>
                        }/>
                        <Route exact={true} path="/search" component={Search}/>
                        <Route exact={true} path="/search/singer"  component={Singer}/>
                        <Route exact={true} path="/search/singer/singerlist/:key/:name"  component={SingerList}/>
                        <Route exact={true} path="/singerdetails/:id"  component={SingerDetails}/>

                    </Switch>
                </div>
            </BrowserRouter >
        )
    }
} 