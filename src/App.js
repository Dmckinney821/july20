import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputBox from './InputBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className='App'>
        <InputBox />
      </div>
    );
  }
  _handleInput = (text) => {
    console.log(text);
  }
}

export default App;
