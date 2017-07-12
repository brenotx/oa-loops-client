import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import { createStructuredSelector } from 'reselect';

import Board from '../../components/Board';
import Instructions from '../../components/Instructions';
import Code from '../Code/index';
import { makeSelectUserPath } from '../Code/selectors';
import {
    selectGame,
    // makeSelectGameNivel,
    // makeSelectGameNivelId,
    makeSelectGameNivelPath,
    makeSelectGameNivelInstructions
} from './selectors';
import { fetchNivel } from './actions';
import { nivels } from './mock.js';


class Game extends Component {
    constructor(props) {
        super(props);   
        this.state = { nivelId: 0 };

        this.updateNivelId = this.updateNivelId.bind(this);
    }

    componentDidMount() {
        this.setState({ nivelId: this.props.location.state.nivelId }, () => {
            this.props.fetchNivel(this.state.nivelId);
        });
        // const { nivelId }  = this.props.location.state;
        // this.props.fetchNivel(this.state.nivelId);
    }
    
    updateNivelId({ nivelId }) {
        this.setState({ nivelId }, () => {
            this.props.fetchNivel(this.state.nivelId);
            console.log(this.state.nivelId);
        });
        
    }

    render() {

        // Variável usada para evitar a chamda de um nivel inexistente.
        // const lastNivel = this.props.game.get('nivels').size;
        
        const lastNivel = nivels.size; // Create a selector for it
        // const nivelId = this.props.location.state.nivelId;

        return (
            <Grid>
                <Row>
                    <PageHeader><small>Nível {this.state.nivelId}</small></PageHeader>
                   
                    <Col md={6}>
                        <Board rows={5} columns={5} nivels={this.props.gameNivelPath} userPath={this.props.codeUserPath} />
                        <Instructions gameNivelInstructions={this.props.gameNivelInstructions} />
                    </Col>
                    <Col md={6}>
                        <Code gameNivelPath={this.props.gameNivelPath} gameNivelId={this.state.nivelId} lastNivel={lastNivel} history={this.props.history} updateNivelId={this.updateNivelId} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    game: selectGame,
    // gameNivel: makeSelectGameNivel(),
    // gameNivelId: makeSelectGameNivelId(),
    gameNivelPath: makeSelectGameNivelPath(),
    gameNivelInstructions: makeSelectGameNivelInstructions(),
    codeUserPath: makeSelectUserPath()
});

export default connect(mapStateToProps, { fetchNivel })(Game);
