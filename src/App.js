import React, { Component } from 'react';

import Header from './containers/Header/index';

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
                <Header />
                {this.props.children}
                
            </div>
        );
    }
}

export default App;
