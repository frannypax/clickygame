import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import cards from "./cards.json";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import GameCard from "./components/GameCard";

class App extends Component {
  constructor(){
    super();
    this.state={
      cards: cards
    }
  }

  render() {
    return (
      <Wrapper>
        <Title>Clicky Game 
          <p>Click on an image to earn points, but don't click on any more than once!</p>
          
        </Title>
          {this.state.cards.map(card => (
          <GameCard image={card.image} />        
        ))}
      </Wrapper>
      
    );
  }
}

export default App;
