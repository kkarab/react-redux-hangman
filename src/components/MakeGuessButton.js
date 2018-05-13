// src/components/MakeGuessButton.js

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './MakeGuessButton.css';
import {makeGuess} from '../actions/game.js';


export class MakeGuessButton extends PureComponent {
  static propTypes = {
    makeGuess: PropTypes.func.isRequired
  }

  handleClick = () => {
    this.props.makeGuess('e')
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        className="MakeGuessButton">
        Make Guess
      </button>
    )
  }
}
//export default MakeGuessButton
export default connect(null, { makeGuess })(MakeGuessButton)
