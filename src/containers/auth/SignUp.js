import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form/immutable";
import { connect } from "react-redux";

import { signupUser } from './actions';

class SignUp extends Component {
    
    handleFormSubmit(values) {
        this.props.signupUser(values, this.props.history);
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
        const className = `${touched && error ? "has-danger" : ""}`;

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

                <fieldset className="form-group">
                    <Field
                        label="Password Confirm:"
                        name="passwordConfirm"
                        component={this.renderField}
                        type="password"
                        placeholder="password"
                    />
                </fieldset>
                {this.renderAlert()}
                <button action="submit" className="btn btn-primary">Sign up!</button>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.email) {
        errors.email = 'Please enter an email';
    }

    if (!values.password) {
        errors.password = 'Please enter a password';
    }

    if (!values.passwordConfirm) {
        errors.passwordConfirm = 'Please enter a password confirmation';
    }

    if (values.password !== values.passwordConfirm) {
        errors.password = 'Passwords must match';
    }
    
    return errors;
}

function mapStateToProps(state) {
    return { errorMessage: state.getIn(['auth', 'error']) };
}

export default reduxForm({
    form: 'SignUpForm',
    validate
})(connect(mapStateToProps, { signupUser })(SignUp));
