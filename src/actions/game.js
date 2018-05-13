//src/actions/game.js

import { randomWord } from '../lib/game.js';
import {NEW_GAME, MAKE_GUESS} from './types.js';


export const newGame = () => {
  const word = randomWord();
  const guesses = [];
  console.log('in action newGame: ' + word)
  return {
    type: NEW_GAME,
    payload: {
      word,
      guesses
    }
  }
};


export const makeGuess = (letter) => {
    return {
    type: MAKE_GUESS,
    payload: letter
  }
};

// export default {newGame, makeGuess};
// export default newGame;
// export default makeGuess;
