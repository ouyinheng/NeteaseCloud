import React,{Component} from 'react';
import {BrowserRouter ,Route,Switch} from 'react-router-dom';
// 登录
import Login from './pages/login';
    import Email from './pages/login/email';
// 主页
import App from './App';
import Admin from './admin';
    import Music from './pages/admin/music'
    import Recom from './pages/admin/recom'
        import Recommend from './pages/admin/recom/recommend'
            import SongListDetails from './pages/admin/recom/recommend/songlistDetails'
        import Friend from './pages/admin/recom/friend'
        import Broad from './pages/admin/recom/broad'

    import Mv from './pages/admin/mv'

    import Search from './pages/admin/search'
        import Singer from './pages/admin/search/singer'
        import SingerList from './pages/admin/search/singerlist'
        import SingerDetails from './pages/admin/search/singerdetails'

import Details from './pages/admin/details'
import Scroll from './pages/login/scroll'


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
                        <Route path="/app" render={()=>
                            <App>
                                <Route path="/app/admin" render={()=>
                                    <Admin>
                                        <Route path="/app/admin/music" component={Music}/>
                                        <Route path="/app/admin/recom" render={()=>
                                            <Recom>
                                                <Route path="/app/admin/recom/recommend" component={Recommend}/>
                                                <Route path="/app/admin/recom/friend" component={Friend}/>
                                                <Route path="/app/admin/recom/broad" component={Broad}/>
                                            </Recom>
                                        }/>
                                        <Route path="/app/admin/mv" component={Mv}/>
                                    </Admin>
                                }/>
                                <Route path="/app/search" component={Search}/>
                                <Route path="/app/details/:id" component={SongListDetails}/>
                                <Route path="/app/singer" component={Singer}/>
                                <Route path="/app/singerlist/:key/:name" component={SingerList}/>
                                <Route path="/app/singerdetails/:id" component={SingerDetails}/>
                                <Route path="/app/musicdetails" component={Details}/>
                            </App>
                        }/>
                    </Switch>
                </div>
            </BrowserRouter >
        )
    }
} 