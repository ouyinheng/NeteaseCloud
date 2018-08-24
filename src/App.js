import React, { Component } from 'react';
import './App.scss';
import Footer from './components/footer'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div className="App">
            { this.props.children }
            <div className="app-footer border-top">
                    <Footer/>
            </div>
            
        </div>
    );
  }
}

export default App;