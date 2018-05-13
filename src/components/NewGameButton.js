// src/components/NewGameButton.js

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './NewGameButton.css';
import {newGame} from '../actions/game.js';

export class NewGameButton extends PureComponent {
  static propTypes = {
    newGame: PropTypes.func.isRequired
  }

  handleClick = () => {
    this.props.newGame()
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        className="NewGameButton"
      >
        New Game
      </button>
    )
  }
}
//export default NewGameButton

export default connect(null, { newGame })(NewGameButton)
