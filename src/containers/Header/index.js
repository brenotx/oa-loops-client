import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Codex from '../../components/Codex';

class Header extends Component {
    renderLinks() {
        if (this.props.authenticated) {
            return (
                <li className="nav-item">
                    <Link className="nav-link" to="/signout">
                        Sign Out
                    </Link>
                </li>
            );
        } else {
            return [
                <li className="nav-item" key={1}>
                    <Link className="nav-link" to="/signin">
                        Sign In
                    </Link>
                </li>,
                <li className="nav-item" key={2}>
                    <Link className="nav-link" to="/signup">
                        Sign Up
                    </Link>
                </li>
            ];
        }
    }
    renderNiveisLink() {
        if (this.props.authenticated) {
            return (
                <li>
                    <Link className="nav-link" to="/nivels">
                        Níveis
                    </Link>
                </li>
            );
        }
    }

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <Link to="/home" className="navbar-brand">
                        <Codex />
                    </Link>
                    <ul className="nav navbar-nav">
                        {this.renderNiveisLink()}
                        {/* <li>
                            <Link className="nav-link" to="/stats">
                                Estatísticas
                            </Link>
                        </li> */}
                    </ul>
                    <ul className="nav navbar-nav navbar-right">{this.renderLinks()}</ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.getIn(['auth', 'authenticated'])
    };
}

export default connect(mapStateToProps)(Header);
