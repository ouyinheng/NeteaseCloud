import React, { Component } from 'react';
import './App.scss';
import Header from './components/header'
import Footer from './components/footer'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearch: false
    };
    // this.toSearch = this.toSearch.bind(this)
  }

  render() {
    return (
        <div className="App">
            <header className="app-header">
                <Header/>
            </header>    
            <section className="app-section">
                {this.props.children}  
            </section>      
            <footer className="app-footer">
                <Footer/>
            </footer>
        </div>
    );
  }
}

export default App;