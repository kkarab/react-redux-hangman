import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewGameButton from './components/NewGameButton.js';
import MakeGuessButton from './components/MakeGuessButton.js';
import {newGame,  makeGuess} from './actions/game.js';
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
          <NewGameButton newGame={newGame} />
        </p>
        <p>
          You have 5 attempts to guess the random word.
        </p>
        <p>
          <MakeGuessButton makeGuess={makeGuess} />
        </p>
      </div>
    );
  }
}

export default App;
