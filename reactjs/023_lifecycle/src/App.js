import React, { Component } from 'react';
import './App.css';
import NoiDung from './noiDung';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangThai : "Khoitao",
      trangThai2 : "Khoitao2",
    }
  }
  
  componentWillMount() {
    console.log('componentWillMount running');
  }
  componentDidMount() {
    console.log('componentDidMount running ___');
    
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate run');
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('state componentWillUpdate run');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('state componentDidUpdate run');
  }
  capNhatSate = () => {
    this.setState({
      trangThai : "Cap nhat 1",
      trangThai2 : 'Cap nhat 2'
    });
  }
  
  render() {
    console.log('trang thai ban dau: ' + this.state.trangThai);
    
    return (
      <div className="App">
        <button onClick={() => this.capNhatSate()}> Click update state</button>
        <NoiDung name={this.state.trangThai2}></NoiDung>
      </div>
    );
  }
}

export default App;
