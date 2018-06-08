import React, { Component } from 'react';
import './../css/App.css';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import News from './News';
import NewsDetail from './NewsDetail';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        {/* <Home/> */}
        {/* <News/> */}
        {/* <NewsDetail/> */}
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
