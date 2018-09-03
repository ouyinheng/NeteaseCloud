import React, { Component } from 'react';
import './App.scss';
import { Link } from 'react-router-dom';
import Footer from './components/Footer'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
        <div className="App">
            <div>
              { this.props.children }
            </div>
            <Link className="app-footer border-top" to="/app/musicdetails" >
                <Footer/>
            </Link>
            
        </div>
    );
  }
}

export default App;