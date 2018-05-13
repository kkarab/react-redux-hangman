// src/components/NewGameButton.js

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './NewGameButton.css'

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

export default NewGameButton
