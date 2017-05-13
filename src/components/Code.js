import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';
import { createStructuredSelector } from 'reselect';
import { Panel, Col, Glyphicon, ButtonToolbar, Button, Modal } from 'react-bootstrap';

import { removeInstruction, setActiveBox, resetApp, nextNivel, setProgRepeat } from '../actions/index';
import { 
    makeSelectMainInstructions,
    makeSelectProgInstructions,
    makeSelectActiveBox,
    makeSelectProgRepeat
} from '../containers/Code/selectors';

const validMoves = Map({
     "arrow-right": 1,
     "arrow-left": -1,
     "arrow-up": -10,
     "arrow-down": 10
});


class Code extends Component {
    constructor(props) {
        super(props);

        this.state = { showWinModal: false };
        this.runCode = this.runCode.bind(this);
    }

    /**
    * Whenever the activeBox changes this method is called.
    */
    // TODO: Write a pure function
    isActive(boxName) {
        if (boxName === this.props.activeBox) {
            return 'jumbotron active-box';
        } else {
            return 'jumbotron';
        }
    }

    // TODO: Write a pure function
    runCode(codeProps) {
        
        // TODO: Remove it form here!
        const path = this.props.gameNivelPath;

        const progMoves = this.progRepeatMoves(codeProps.progRepeat, codeProps.progInstructions);
        const moves = this.applyLoopInstructions(codeProps.mainInstructions, progMoves);

        this.checkCode(path, moves);
    }

    // TODO: You don't need two List()
    /**
    * Repeat the list elements for the given multiplier.
    * 
    * @param  {Number} progRepeat - The number of repeats.
    * @param  {Immutable.List} progMoves - List with instructions.
    * @return {Immutable.List} List with multiplied instructions.
    */
    progRepeatMoves(progRepeat, progMoves) {
        if (progRepeat > 1 && progMoves.size) {
            let progMovesRepeated = List();
            for (let i = 0; i < progRepeat; i++) {
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
            return moves;
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
                this.setState({ showWinModal: true });
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
                value={this.props.progRepeat} min="1" max="10"
                onChange={event => this.props.setProgRepeat(event.target.value)} />
            </label>
        );
    }

    // TODO: Maybe you can do some refactoring in here
    continue() {
        this.setState({ showWinModal: false });
        this.props.nextNivel();
        this.props.resetApp();
    }

    render() {
        const { mainInstructions, progInstructions, progRepeat } = this.props;
        const codeProps = {
            mainInstructions,
            progInstructions,
            progRepeat
        };

        return (
            <Col>
                <Panel header="Código">
                    <h5>Main:</h5>
                    <div className={this.isActive('main')} onClick={() => this.props.setActiveBox('main')}>
                        {mainInstructions.map( (icon, idx) =>
                            <Button key={idx} bsStyle="primary" onClick={ () => this.props.removeInstruction(idx)}>
                                <Glyphicon glyph={icon} />
                            </Button>
                        )}
                    </div>
                    {/* <h5>Prog:</h5> */}
                    {this.renderSelect()}
                    <div className={this.isActive('prog')} onClick={() => this.props.setActiveBox('prog')}>
                        {progInstructions.map( (icon, idx) =>
                            <Button key={idx} bsStyle="primary" onClick={ () => this.props.removeInstruction(idx)}>
                                <Glyphicon glyph={icon} />
                            </Button>
                        )}
                    </div>
                    <ButtonToolbar>
                        <Button className="pull-right" bsStyle="primary" onClick={() => this.runCode(codeProps)}>Executar</Button>
                        <Button className="pull-right" bsStyle="primary" onClick={() => this.props.resetApp()}>Resetar</Button>
                    </ButtonToolbar>
                </Panel>
        
                <Modal bsSize="small" show={this.state.showWinModal}>
                        <Modal.Body>
                            Parabéns você venceu!!!
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => this.continue()}>Continuar</Button>
                        </Modal.Footer>
                </Modal>
            </Col>
        );
    }
}


const mapStateToProps = createStructuredSelector({
    mainInstructions: makeSelectMainInstructions(),
    progInstructions: makeSelectProgInstructions(),
    activeBox: makeSelectActiveBox(),
    progRepeat: makeSelectProgRepeat()
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        removeInstruction,
        setActiveBox,
        resetApp,
        nextNivel,
        setProgRepeat }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Code);
