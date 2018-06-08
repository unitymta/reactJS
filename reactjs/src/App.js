import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './Component/TopMenu/TopMenu';
import Header from './Component/Header/Header';
import Content from './Component/Content/Content';
import Footer from './Component/Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="reactjs">
        <TopMenu/>
        <Header/>

        <div className="row align-items-center">
          <Content title="Test props 1" order1="order-lg-2" links="01.jpg"/>
          <Content title="Test props 2" links="02.jpg"/>
          <Content title="Test props 3" order1="order-lg-2" links="03.jpg"/>

          <Content title="Test props 1" order1="order-lg-2" links="01.jpg"/>
          <Content title="Test props 2" links="02.jpg"/>
          <Content title="Test props 3" order1="order-lg-2" links="03.jpg"/>

          <Content title="Test props 1" order1="order-lg-2" links="01.jpg"/>
          <Content title="Test props 2" links="02.jpg"/>
          <Content title="Test props 3" order1="order-lg-2" links="03.jpg"/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
