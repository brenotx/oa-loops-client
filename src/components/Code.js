import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';
import { Panel, Col, Glyphicon, ButtonToolbar, Button } from 'react-bootstrap';

import { removeInstruction, setSelectedBox, resetApp } from '../actions/index';

const validMoves = Map({
     "arrow-right": 1,
     "arrow-left": -1,
     "arrow-up": -10,
     "arrow-down": 10
});

class Code extends Component {
    constructor(props) {
        super(props);

        this.state = { repeatProg: 1 };
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

    // TODO: Pure function
    runCode() {
        const path = this.props.gamePath;
        const repeatProg = this.state.repeatProg;

        let progMoves = this.props.instructionReducer.get('progInstructions');
        let moves = this.props.instructionReducer.get('mainInstructions');

        progMoves = this.repeatProgMoves(repeatProg, progMoves);
        moves = this.applyLoopInstructions(moves, progMoves);

        this.checkCode(path, moves);
    }

    // TODO: You don't need two List()
    /**
    * Repeat the list elements for the given multiplier.
    * 
    * @param  {Number} repeatProg - The number of repeats.
    * @param  {Immutable.List} progMoves - List with instructions.
    * @return {Immutable.List} List with multiplied instructions.
    */
    repeatProgMoves(repeatProg, progMoves) {
        if (repeatProg > 1 && progMoves.size) {
            let progMovesRepeated = List();
            for (let i = 0; i < repeatProg; i++) {
                progMovesRepeated = progMovesRepeated.concat(progMoves);
            }
            return progMovesRepeated;
        } else {
            return progMoves;
        }
    }

    /**
     * Give a list of moves, replace the 'repeat' move with progMoves instructions.
     *
     * @param { Immutable.List() } moves - The user given instructions.
     * @return { Immutable.List() } moves - Final list with 'repeat' strings replaced
     * for the prog instructions.
     */
     applyLoopInstructions(moves, progMoves) {
        moves.map((elem, idx) => {
            if (elem === 'repeat') {
                moves = moves.update(idx, val => progMoves);
                moves =  List().concat(...moves);
                this.applyLoopInstructions(moves);
            }
        });
        return moves;
    }
    
    /**
     * Based of the difference between maxtix cell path check if the move is correct.
     * 
     * @param  {Immutable.List} path - The problem instructions path.
     * @param  {Immutable.List} moves - The user given instructions.
     * @return {type} // TODO
     */
    checkCode(path, moves) {
        // Check if we have enough to solve the problem
        if (path.size - 1 === moves.size) {
            if (path.size > 1 && moves.size > 0) {
                let start = path.first();
                let next = path.get(1);
                let move = moves.first();
                let difference = next - start; // TODO: Check, String???
                if (validMoves.get(move) === difference) {
                    console.log(`good move -> ${move}`);
                    let newPath = path.shift();
                    let newMoves = moves.shift();
                    this.checkCode(newPath, newMoves);
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

    renderSelect() {
        return (
            // TODO: Use Reat-boostrap, Add Prog1 label
            <label className="control-label">Repetir:
            <input className="form-control" type="number"
                value={this.state.repeatProg} min="1" max="10"
                onChange={event => this.onInputChange(event.target.value)}/>
            </label>
        );
    }

    onInputChange(repeatProg) {
        this.setState({ repeatProg });
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
                    {/* <h5>Prog:</h5> */}
                    {this.renderSelect()}
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
