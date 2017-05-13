import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import { createStructuredSelector } from 'reselect';

import Board from './Board';
import Instructions from './Instructions';
import Code from './Code';
import {
    selectGame,
    makeSelectGameNivel,
    makeSelectGameNivelId,
    makeSelectGameNivelPath,
    makeSelectGameNivelInstructions
} from '../containers/Game/selectors';


export class Game extends Component {
    
    render() {
        return (
            <Grid>
                <Row>
                    <PageHeader>OA <small>loops - Nível {this.props.gameNivelId}</small></PageHeader>
                    <Col md={6}>
                        <Board rows={5} columns={5} nivels={this.props.gameNivelPath} />
                        <Instructions gameNivelInstructions={this.props.gameNivelInstructions} />
                    </Col>
                    <Col md={6}>
                        <Code gameNivelPath={this.props.gameNivelPath} />
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
    gameNivelInstructions: makeSelectGameNivelInstructions()
});

export default connect(mapStateToProps)(Game);
