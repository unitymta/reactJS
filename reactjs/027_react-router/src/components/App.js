import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './../css/App.css';
import Nav from './Nav';
import Footer from './Footer';
import DieuHuongURL from './../router/DieuHuongURL';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav/>
          <DieuHuongURL/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
