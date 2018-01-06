import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header.js";
import Instructions from "./components/Instructions/Instructions.js";
import GameCards from "./components/GameCards/GameCards.js";

class App extends Component{
  render(){
    return(
      <div id="wrapper">
        <Header />
        <Instructions />
        <GameCards />
      </div>
      );
  } 
}

export default App;