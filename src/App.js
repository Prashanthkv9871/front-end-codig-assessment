import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router} from 'react-router-dom'
import About from './components/About';
import Membership from './components/Membership';
import Footer from './components/Footer';
import News from './components/News';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <About />
          <News />
          <Membership />
          <Footer />
        </Router>
        
      </>
      
    )
  }
}

export default App;
