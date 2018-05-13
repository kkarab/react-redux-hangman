import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import {showGuess } from '../lib/game.js';

const mapStateToProps = ({ word, guesses }) => ({ word, guesses })

class Hangman extends Component {
  static propTypes = {
      word: PropTypes.string.isRequired,
      guesses: PropTypes.arrayOf(PropTypes.string).isRequired
    }
  render() {
    return (
        <div>
        hangman: {showGuess(this.props.word, this.props.guesses)} <br/>
        (past guesses: {this.props.guesses.join(',')}) 
        </div>

    );
  }
}

export default connect(mapStateToProps)(Hangman);
