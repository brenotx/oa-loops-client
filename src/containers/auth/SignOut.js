import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class SignOut extends Component {
    componentWillMount() {
        this.props.signoutUser();
    }

    componentDidMount() {
        this.props.history.push('/signin');
    }

    // This code is not even being rendered, cuz we have a redirect.
    render() {
        return (
            <div className="alert alert-dismissible alert-info col-sm-6 col-md-4 col-md-offset-4">
                <button type="button" className="close" data-dismiss="alert">
                    &times;
                </button>
                <a className="alert-link">Usuário deslogado com sucesso.</a>
            </div>
        );
    }
}

export default connect(null, actions)(SignOut);
