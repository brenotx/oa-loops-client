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
    makeSelectGameNivel,
    makeSelectGameNivelId,
    makeSelectGameNivelPath,
    makeSelectGameNivelInstructions
} from './selectors';


class Game extends Component {

    componentDidMount() {
    //     const { id } = this.props.match.params;
    //     this.props.fetchPost(id);
    }
    
    render() {

        // Variável usada para evitar a chamda de um nivel inexistente.
        const lastNivel = this.props.game.get('nivels').size;

        return (
            <Grid>
                <Row>
                    <PageHeader><small>Nível {this.props.gameNivelId}</small></PageHeader>
                   
                    
                    <Col md={6}>
                        <Board rows={5} columns={5} nivels={this.props.gameNivelPath} userPath={this.props.codeUserPath} />
                        <Instructions gameNivelInstructions={this.props.gameNivelInstructions} />
                    </Col>
                    <Col md={6}>
                        <Code gameNivelPath={this.props.gameNivelPath} gameNivelId={this.props.gameNivelId} lastNivel={lastNivel} history={this.props.history} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    game: selectGame,
    gameNivel: makeSelectGameNivel(),
    gameNivelId: makeSelectGameNivelId(),
    gameNivelPath: makeSelectGameNivelPath(),
    gameNivelInstructions: makeSelectGameNivelInstructions(),
    codeUserPath: makeSelectUserPath()
});

export default connect(mapStateToProps)(Game);
