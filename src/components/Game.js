import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';

import Cell from './Cell';
import Board from './Board';
import Instructions from './Instructions';
import Code from './Code';


class Game extends Component {

    // TODO: Maybe a reducer can handle it better
    getNivelPath(nivelReducer) {
        return nivelReducer.get('gameNivel').find((obj) => {
            return obj.get('id') === nivelReducer.get('currentNivelId');
        });
    }

    render() {
        return (
            <Grid>
                <Row>
                    <PageHeader>OA <small>loops</small></PageHeader>
                    <Col md={6}>
                        <Board rows={5} columns={5} gameNivel={this.getNivelPath(this.props.nivelReducer)} />
                        <Instructions />
                    </Col>
                    <Col md={6}>
                        <Code gameNivel={this.getNivelPath(this.props.nivelReducer)} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        nivelReducer: state.nivelReducer
    }
}

export default connect(mapStateToProps)(Game);
