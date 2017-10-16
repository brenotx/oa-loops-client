import React, { Component } from 'react';
import { Field, reduxForm, change } from 'redux-form/immutable';
import { connect } from 'react-redux';

import { signinUser } from './actions';
import Codex from '../../components/Codex';

class SignIn extends Component {
    handleFormSubmit(values) {
        const { email, password } = values;
        this.props.signinUser({ email, password }, this.props.history);
        this.props.dispatch(change('SignInForm', 'password', ''));
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    Senha errada ou email não cadastrado.
                    {/*  <strong>Oops!</strong> {this.props.errorMessage} */}
                </div>
            );
        }
    }

    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type={field.type} {...field.input} />
                <div className="text-help">{touched ? error : ''}</div>
            </div>
        );
    }

    render() {
        const { handleSubmit } = this.props;
        const bigLogo = {
            fontSize: '200%'
        };
        return (
            <div className="col-sm-6 col-md-4 col-md-offset-4">
                <form className="well bs-component" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <fieldset className="form-group">
                        <legend>
                            <div className="text-center">
                                <span style={bigLogo}>
                                    <Codex />
                                </span>
                            </div>
                        </legend>
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
                            label="Senha:"
                            name="password"
                            component={this.renderField}
                            type="password"
                            placeholder="password"
                        />
                    </fieldset>
                    {this.renderAlert()}
                    <div className="text-right">
                        <button className="btn btn-primary" action="submit">
                            Entrar
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.getIn(['auth', 'error']) };
}

export default reduxForm({
    form: 'SignInForm'
})(connect(mapStateToProps, { signinUser })(SignIn));
