import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Game from './containers/Game/index';
import Header from './containers/Header/index';
import { firebaseApp } from './firebase';


class App extends Component {
    constructor(props) {
        super(props);

        // Variable used to identify the game user instance
        this.state = { gameId: 1 };
    }
    
    componentDidMount() {
        firebaseApp.auth().onAuthStateChanged(user => {
            if (user) {
                console.log('user has signed in or up', user);
                // const { email } = user;
                // store.dispatch(logUser(email));
                // <Redirect to="/app" />
                // browserHistory.push('/app');
            } else {
                // console.log('user has signed out or still needs to sign in.')
                <Redirect to="/signin" />
                // browserHistory.replace('/signin');
            }
        })
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
