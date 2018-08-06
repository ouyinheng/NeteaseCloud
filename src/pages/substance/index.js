import React, { Component } from 'react';
import './index.scss'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

import Recomm from '../Recomm'
import Friend from '../Friend'
import Broadcast from '../broadcast'
class substance extends Component {
    render() {
        return (
            <Router>
                <div className="substance">
                    <nav className="nav">
                        <Link to="/Recomm">推荐</Link>
                        <Link to="/Friend">朋友</Link>
                        <Link to="/Broadcast">电台</Link>
                    </nav>
                    <section className="container">
                        <Route exact path="/Recomm" component={Recomm}></Route>
                        <Route exact path="/Friend" component={Friend}></Route>
                        <Route exact path="/Broadcast" component={Broadcast}></Route>
                    </section>
                </div>
            </Router>
            
        )
    }
}
export default substance