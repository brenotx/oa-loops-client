import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Map, List, fromJS } from 'immutable';
import { createStructuredSelector } from 'reselect';
import { Panel, Col, Glyphicon, ButtonToolbar, Button, Modal } from 'react-bootstrap';
import * as firebase from 'firebase';

import { setUserPath, resetUserPath } from './actions';
import { nivelRef, nivelStatsRef } from '../../firebase';
import {
    removeInstruction,
    setActiveBox,
    resetApp,
    nextNivel,
    setProgRepeat
} from '../../actions/index';
import { 
    makeSelectMainInstructions,
    makeSelectProgInstructions,
    makeSelectActiveBox,
    makeSelectProgRepeat
} from './selectors';

const validMoves = Map({
     "arrow-right": 1,
     "arrow-left": -1,
     "arrow-up": -10,
     "arrow-down": 10
});


class Code extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showWinModal: false,
            nivelStats: Map({
                tries: 0,
                correctAnwsers: 0,
                wrongAnwsers: 0
            })
        };
        this.runCode = this.runCode.bind(this);
    }

    componentDidMount() {
        
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

    // TODO: Write a pure function! What a shit code!
    runCode(codeProps) {


        // this.setState(({nivelStats}) => ({
        //     nivelStats: nivelStats.update('tries', v => v + 1)
        // }));

        // console.log("haha " + this.state.nivelStats.get('tries'));

        // TODO: Remove it from here!
        const path = this.props.gameNivelPath;

        const progMoves = this.progRepeatMoves(codeProps.progRepeat, codeProps.progInstructions);
        const moves = this.applyLoopInstructions(codeProps.mainInstructions, progMoves);

        const cellStartPosition = this.props.gameNivelPath.first();
        const cellMovesNumber = this.convertMovesToCellNumber(cellStartPosition, moves);

        let promises = [];
        promises = this.checkCode2(path, cellMovesNumber);
        const results = Promise.all(promises);
        results.then((result) => {
            this.setNivelStats(path.equals(cellMovesNumber));
            // path.equals(cellMovesNumber) ? this.setState({ showWinModal: true }) : this.setNivelStats();
        });
    }

    setNivelStats(codeResult) {
        // console.log('DIDMOUNT')
        // nivelStatsRef.on('value', snap => {
        //     snap.forEach(nivelStats => {
        //         let { tries, correctAnwsers, wrongAnwsers } = nivelStats.val();
        //         this.setState({ nivelStats : { tries, correctAnwsers, wrongAnwsers }})
        //     })
        // });

        // console.log(this.state.nivelStats);
        // var nivelsStats = firebase.database().ref('nivelsStats');
        if (codeResult) {
            this.setState({ showWinModal: true })
             
            // nivelsStats.set([{
            //     tries: this.state.nivelStats.tries += 1,
            //     correctAnwsers: this.state.nivelStats.correctAnwsers += 1,
            //     wrongAnwsers: this.state.nivelStats.wrongAnwsers,
            //     // totalInstructions: 5
            // }]);
        } else {

            var ref = firebase.database().ref('nivelsStats');
            
            ref.once('value', snap => {
                const keys = Object.keys(snap.val());
                let { correctAnwsers, wrongAnwsers } = snap.val()[keys[this.props.gameNivelId]];
                // console.log(correctAnwsers, wrongAnwsers)
                var ref2 = firebase.database().ref('nivelsStats/' + keys[this.props.gameNivelId]);
                ref2.update({
                    correctAnwsers: correctAnwsers += 1,
                    wrongAnwsers: wrongAnwsers += 1
                })
            });



            // Code used to create the data
            // var ref = firebase.database().ref('nivelsStats');
            // this new, empty ref only exists locally
            // var newChildRef = ref.push();
            // we can get its id using key()
            //now it is appended at the end of data at the server
            // newChildRef.set({correctAnwsers: 0, wrongAnwsers: 0});
            
            console.log('perdeu');
        }
    }

    /**
     * Converte the string moves list to numbers list.
     * 
     * @param {Integer} cellStartPosition - The path start postion.
     * @param {Immutable.List} moves - The user moves list.
     * @return {Immutable.List} cellMovesNumber - User cells moves list.
     */
    convertMovesToCellNumber(cellStartPosition, moves) {
        let row = parseInt(cellStartPosition[0], 10);
        let col = parseInt(cellStartPosition[1], 10);
        const cellMovesNumber = moves.map((move) => {
            switch (move) {
                case "arrow-right":
                    col += 1;
                    break;
                case "arrow-left":
                    col -= 1;
                    break;
                case "arrow-up":
                    row -= 1;
                    break;
                case "arrow-down":
                    row += 1;
                    break;
            }
            return row.toString() + col.toString();
        });
        return cellMovesNumber.insert(0, cellStartPosition);
    }

    /**
     * 
     * @param {Immutable.List} cellMovesNumber - List with user given paths.
     */
    animateExecution(cellMovesNumber) {
        const self = this;
        const promises = cellMovesNumber.map((elem, idx) => {
            const promise = (function(index) {
                return new Promise(resolve => setTimeout(() => {
                    self.props.setUserPath(cellMovesNumber.get(idx));
                    resolve();
                }, idx * 1000));
            })(idx);
            return promise;
        });
        return promises;
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
     * @return {Boolean} Return true if the moves solves the problem otherwise false
     */
    checkCode(path, moves) {
        // Check if we have enough to solve the problem
        // if (path.size > 1 && moves.size > 0) {
            let start = path.first();
            let next = path.get(1);
            let move = moves.first();
            let difference = next - start; // TODO: Check, String???
            if (validMoves.get(move) === difference) {
                console.log(`good move -> ${move}`);
                let newPath = path.shift();
                let newMoves = moves.shift();
                return this.checkCode(newPath, newMoves);
            } else {
                console.log('Perdeu 1');
                return false;
            }
        // } else {
            // console.log('Perdeu 2');
            // return true;
        // }
    }

    checkCode2(path, moves) {
        const self = this;
        let count = 0;
        const promises = moves.map((item, idx) => {
            if (item === path.get(idx) || !count) {
                const promise = (function(index) {
                return new Promise(resolve => setTimeout(() => {
                        self.props.setUserPath(moves.get(idx));
                        resolve();
                    }, idx * 1000));
                })(idx);
                return promise;
            } else {
                count = 1;
            }
        });
        return promises;
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
        this.props.resetUserPath();
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
        setProgRepeat,
        setUserPath,
        resetUserPath }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Code);
