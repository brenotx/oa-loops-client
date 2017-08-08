import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class SignOut extends Component {
    componentWillMount() {
        this.props.signoutUser();
    }

    render() {
        return (
            <div className="alert alert-dismissible alert-info col-sm-6 col-md-4 col-md-offset-4">
                <button type="button" className="close" data-dismiss="alert">&times;</button>
                <strong>Oh snap!</strong> <a href="#" className="alert-link">Sorry to see you go...</a>
            </div>
        );
    }
}

export default connect(null, actions)(SignOut);
