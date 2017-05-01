import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { Panel, Col, Glyphicon, ButtonToolbar, Button } from 'react-bootstrap';

import { removeInstruction, setSelectedBox, resetApp } from '../actions/index';

class Code extends Component {
    constructor(props) {
        super(props);

        this.runCode = this.runCode.bind(this);
    }

    getMainInstructions() {
        return this.props.instructionReducer.get('mainInstructions') || [];
    }

    getProgInstructions() {
        return this.props.instructionReducer.get('progInstructions') || [];
    }

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

    runCode() {
        const path = this.props.gamePath;
        const moves = this.props.instructionReducer.get('mainInstructions');
        const validMoves = Map({
             "arrow-right": 1,
             "arrow-left": -1,
             "arrow-up": -10,
             "arrow-down": 10
        });

        checkCode(path, moves);

        /**
        * Based of the difference between maxtix cell path
        * check if the move is correct.
        */
        function checkCode(path, moves) {
            // Check if we have enough to solve the problem
            if (path.size - 1 === moves.size) {
                if (path.size > 1 && moves.size > 0) {
                    let start = path.first();
                    let next = path.get(1);
                    let move = moves.first();
                    let difference = next - start; // TODO: String???
                    if (validMoves.get(move) === difference) {
                        console.log("good move");
                        let newPath = path.shift();
                        let newMoves = moves.shift();
                        checkCode(newPath, newMoves);
                    } else {
                        console.log("bad move");
                        console.log("you lost");
                        return;
                    }
                } else {
                    console.log("You own");
                    return;
                }
            } else {
                console.log("you lost");
                return;
            }
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
                    <h5>Prog:</h5>
                    <div className={this.isActive('prog')} onClick={() => this.props.setSelectedBox('prog')}>
                        {this.getProgInstructions().map( (icon, idx) =>
                            <Button key={idx} bsStyle="primary" onClick={ () => this.props.removeInstruction(idx)}>
                                <Glyphicon glyph={icon} />
                            </Button>
                        )}
                    </div>
                    <ButtonToolbar>
                        <Button className="pull-right" bsStyle="primary" onClick={() => this.runCode()}>Executar</Button>
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
