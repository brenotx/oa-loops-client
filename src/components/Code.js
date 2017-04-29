import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Panel, Col, Glyphicon, ButtonToolbar, Button } from 'react-bootstrap';

import { removeInstruction, setSelectedBox, resetApp } from '../actions/index';

class Code extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = { selectedBox: '' };
    // }
    getMainInstructions() {
        return this.props.instructionReducer.get('mainInstructions') || [];
    }

    getProgInstructions() {
        return this.props.instructionReducer.get('progInstructions') || [];
    }

    // setSelectedBox(boxName) {
    //     this.props.instructionReducer.set('selectedBox', boxName);
    //     this.setState({ selectedBox: boxName });
    // }

    /**
    * Whenever the selectedBox changes this method is called.
    */
    isActive(boxName) {
        if (boxName === this.props.instructionReducer.get('selectedBox')) {
            return 'jumbotron active-box';
        } else {
            return 'jumbotron';
        }
    }

    render() {
        return (
            <Col>
                <Panel header="Código">
                    <h5>Main:</h5>
                    <div className={this.isActive('main')} onClick={() => this.props.setSelectedBox('main')}>
                        {this.getMainInstructions().map( (icon, idx) =>
                            <Button key={idx} bsStyle="primary" onClick={ () => this.props.removeInstruction(idx)}>
                                <Glyphicon glyph={icon} />
                            </Button>
                        )}
                    </div>
                    <h5>Prog1:</h5>
                    <div className={this.isActive('prog')} onClick={() => this.props.setSelectedBox('prog')}>
                        {this.getProgInstructions().map( (icon, idx) =>
                            <Button key={idx} bsStyle="primary" onClick={ () => this.props.removeInstruction(idx)}>
                                <Glyphicon glyph={icon} />
                            </Button>
                        )}
                    </div>
                    <ButtonToolbar>
                        <Button className="pull-right" bsStyle="primary">Executar</Button>
                        <Button className="pull-right" bsStyle="primary" onClick={() => this.props.resetApp()}>Resetar</Button>
                    </ButtonToolbar>
                </Panel>
            </Col>
        );
    }
}

function mapStateToProps(state) {
    return {
        instructionReducer: state.instructionReducer
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ removeInstruction, setSelectedBox, resetApp }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Code);
