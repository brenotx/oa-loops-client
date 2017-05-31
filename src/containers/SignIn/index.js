import React, { Component } from 'react';
import { Route, Link, Redirect, withRouter } from 'react-router-dom';

import { firebaseApp } from '../../firebase';


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        };
    }

    componentDidMount() {
        const { history } = this.props;
        firebaseApp.auth().onAuthStateChanged(user => {
            if (user) {
                console.log('user has signed in or up', user);
                // const { email } = user;
                // store.dispatch(logUser(email));
                    history.push("/game");
                
                // return (
                //     <Redirect push to="/game" />
                // );
                
                // browserHistory.push('/app');
            } else {
                // console.log('user has signed out or still needs to sign in.')
                <Redirect to="/signin" />
                // browserHistory.replace('/signin');
            }
        })
    }

    signIn() {
        console.log('this.state: ', this.state);
        const { email, password } = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({ error });
            });
    }

    render() {
        return (
            <div className="form-inline" style={{margin: '5%'}}>
                <h2>Sign In</h2>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        style={{marginRight: '5px'}}
                        placeholder="email"
                        onChange={event => this.setState({ email: event.target.value })} />
                    <input
                        className="form-control"
                        type="password"
                        style={{marginRight: '5px'}}
                        placeholder="password"
                        onChange={event => this.setState({ password: event.target.value })} />
                    <button
                        className="btn btb-primary"
                        type="button"
                        onClick={() => this.signIn()}>
                        Sign In
                    </button>
                </div>
                <div>{this.state.error.message}</div>
                <div><Link to={'/signup'}>Sign up instead</Link></div>
            </div>
        );
    }
}

export default withRouter(SignIn);