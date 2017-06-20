import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from "redux-form/immutable";
import { connect } from "react-redux";

import { signinUser } from './actions';

class SignIn extends Component {

    handleFormSubmit(values) {
        const { email, password } = values;
        this.props.signinUser({ email, password }, this.props.history);
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }

    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type={field.type} {...field.input} />
                <div className="text-help">
                {touched ? error : ""}
                </div>
            </div>
        );
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <Field
                        label="Email:"
                        name="email"
                        component={this.renderField}
                        type="email"
                        placeholder="email"
                    />
                </fieldset>
                <fieldset className="form-group">
                    <Field
                        label="Password:"
                        name="password"
                        component={this.renderField}
                        type="password"
                        placeholder="password"
                    />
                </fieldset>
                {this.renderAlert()}
                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.getIn(['auth', 'error']) };
}

export default reduxForm({
    form: 'SignInForm',
})(connect(mapStateToProps, { signinUser })(SignIn));
