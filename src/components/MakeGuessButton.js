// src/components/MakeGuessButton.js

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './MakeGuessButton.css'

export class MakeGuessButton extends PureComponent {
  static propTypes = {
    makeGuess: PropTypes.func.isRequired
  }

  handleClick = () => {
    this.props.makeGuess()
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

export default MakeGuessButton
