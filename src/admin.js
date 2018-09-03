import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header'

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    // this.toSearch = this.toSearch.bind(this)
  }

  render() {
    return (
        <div className="admin">
            <header className="app-header">
                <Header/>
            </header>    
            <section className="app-section">
                {this.props.children}  
            </section>      
        </div>
    );
  }
}

export default Admin;