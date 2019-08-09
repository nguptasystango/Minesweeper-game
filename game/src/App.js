import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board'

class App extends Component {
  state = {
    height: 3,
    width: 3,
    mines: 5
  }; 
  render() {
    const { height, width, mines } = this.state;
    return (
      <div className="game">
        <Board height={height} width={width} mines={mines} />
      </div>
    );
  }
}  

export default App;
