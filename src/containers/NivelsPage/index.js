import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchUserMaxNivel, setCurrentNivel } from './actions';
import { makeSelectNivels, makeSelectUserMaxNivel } from './selectors';

class NivelsPage extends Component {
    // constructor(props) {
    //     super(props);

    //     this.renderNivels = this.renderNivels.bind(this);
    //     this.handleButtonDisabled = this.handleButtonDisabled.bind(this);
    //     this.renderLocker = this.renderLocker.bind(this);
    // }

    componentDidMount() {
        const userId = localStorage.getItem('user_id');
        this.props.fetchUserMaxNivel(userId);
    }

    handleButtonDisabled(nivelId) {
        if (nivelId > this.props.userMaxNivel + 1) {
            return true;
        }
        return false;
    }

    renderLocker(nivelId) {
        if (nivelId > this.props.userMaxNivel + 1) {
            return <span className="glyphicon glyphicon-lock" />;
        }
        return;
    }

    onNivelButtonClick(selectedNivelId) {
        this.props.history.push('/game', { nivelId: selectedNivelId });
    }

    renderNiveisList() {
        let buttonClass = 'btn btn-default btn-block';
        return this.props.nivels.map(nivel => {
            return (
                <div className="list-group-item" key={nivel.get('id')}>
                    <button
                        type="button"
                        className={buttonClass}
                        onClick={() => this.onNivelButtonClick(nivel.get('id'))}
                        disabled={this.handleButtonDisabled(nivel.get('id'))}
                    >
                        Nível {nivel.get('id')} &nbsp;
                        {this.renderLocker(nivel.get('id'))}
                    </button>
                </div>
            );
        });
    }

    // TODO: Redundant logic at renderLocker and handleButtonDisabled methods
    renderNivels() {
        let buttonClass = 'btn btn-default btn-block';

        return (
            <div>
                <div className="list-group-item">
                    <button type="button" className={buttonClass} onClick={() => this.props.history.push('/guide')}>
                        Tutorial
                    </button>
                </div>
                {this.renderNiveisList()}
            </div>
        );
    }

    render() {
        return <div>{this.renderNivels()}</div>;
    }
}

// TODO: I don't think you need to use createStructuredSelector here
const mapStateToProps = createStructuredSelector({
    nivels: makeSelectNivels(),
    userMaxNivel: makeSelectUserMaxNivel()
});

export default connect(mapStateToProps, { fetchUserMaxNivel, setCurrentNivel })(NivelsPage);
