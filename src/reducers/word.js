//reducers/word.js
import {NEW_GAME, MAKE_GUESS} from '../actions/types.js';
import {randomWord} from '../lib/game.js';


const initialState = "";

export default (state = initialState, { type, payload } = {}) => {
  console.log('word reducer');
  console.log(type);
  console.log(payload);
  switch (type) {
    case NEW_GAME:
      console.log('action: NEW_GAME');
      return payload.word
    default :
      return state
  }

}
