import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewGameButton from './components/NewGameButton.js';
import MakeGuessButton from './components/MakeGuessButton.js';
import Hangman from './components/Hangman.js';
import {newGame,  makeGuess} from './actions/game.js';
import {showGuess } from './lib/game.js';
// import makeGuess from './actions/game.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Play The Hungman!</h1>
        </header>
        <p className="App-intro">
          To start a new game of hungman, use the new game button and the game will automatically select a new random word for you to guess.
        </p>
        <p>
          <NewGameButton />
        </p>
        <Hangman />
        <p>
          You have 5 attempts to guess the random word.
        </p>
        <p>
          <MakeGuessButton  />
        </p>
      </div>
    );
  }
}

export default App;
