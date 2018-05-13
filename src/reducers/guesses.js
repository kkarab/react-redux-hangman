//src/reducers/guesses.js
import {MAKE_GUESS, NEW_GAME} from '../actions/types.js';

const initialState = [];

export default (state = initialState, { type, payload } = {}) => {
  // console.log('action/types');
  // console.log(state);
  // console.log(type);
  // console.log(payload);
  // console.log(MAKE_GUESS);
  switch (type) {
    case MAKE_GUESS :
      console.log('action: MAKE_GUESS')
      return [...state, payload]
    case NEW_GAME:
      console.log('action: NEW_GAME');
      return initialState
    default :
      return state
  }

}
