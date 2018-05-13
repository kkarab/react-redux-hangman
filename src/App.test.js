import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {newGame,makeGuess} from './actions/game.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

console.log(makeGuess('f'))
