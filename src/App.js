// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react';
import Game from './components/Game';

class App extends Component {
    constructor(props) {
        super(props);

        // Variable used to identify the game user instance
        this.state = { gameId: 1 };
    }
    /**
    * Create a new gameId for each user
    */
    createNewGame() {
        this.setState({ gameId: this.state.gameId + 1 });
    }

    render() {
        return (
            <div>
                <Game key={this.state.gameId}
                      createNewGame={this.createNewGame.bind(this)} />
            </div>
        );
    }
}

export default App;
