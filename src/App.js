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
          <Header/>

          <div className="footer">
            <Footer/>
          </div>
        </div>
    );
  }
}

export default App;