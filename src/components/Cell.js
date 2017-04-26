import React, { Component } from 'react';

class Cell extends Component {
    /* A cell is active if its id is part of the activeCells
    * array, and we only want the active cells to show up on the
    * grid during the “memorize” gameState.
    */
    active() {
        return this.props.activeCells.indexOf(this.props.id) >= 0;
    }
    handleClick() {
        // Only record a guess when the game is in the 'recall' state
        if (this.guessState() === undefined && this.props.gameState === 'recall') {
            this.props.recordGuess({
                cellId: this.props.id,
                userGuessIsCorrect: this.active()
            });
        }
    }
    guessState() {
        if (this.props.correctGuesses.indexOf(this.props.id) >= 0) {
            return true;
        } else if (this.props.wrongGuesses.indexOf(this.props.id) >= 0) {
            return false;
        }
    }
    render() {
        let className = 'cell';
        if (this.props.gameState === 'memorize' && this.active()) {
            className += ' active';
        }
        if (this.guessState() !== undefined) className += ' guess-' + this.guessState();
        if (this.props.showActiveCells && this.active()) {
            className += ' active';
        }
        return (
            <div className={className} onClick={this.handleClick.bind(this)}>
            </div>
        );
    }
}

export default Cell;
