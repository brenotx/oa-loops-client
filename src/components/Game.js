import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';

import Cell from './Cell';
import Instructions from './Instructions';
import Code from './Code';


class Game extends Component {
    constructor(props) {
        super(props);

        this.matrix = [];
        for (let r = 0; r < this.props.rows; r++) {
            let row = [];
            for (let c = 0; c < this.props.columns; c++) {
                row.push(`${r}${c}`);
            }
            this.matrix.push(row);
        }

        this.gameNivel = this.props.gameNivel;

    }

    getNivelPath(nivelId) {
        return this.gameNivel.find((obj) => {
            return obj.get('id') === nivelId;
        });
    }

    // getCurrentNivelId() {
    //     return this.props.nivelReducer.get('currentNivelId') || 0;
    // }

    render() {
        return (
            <Grid>
                <Row>
                    <PageHeader>OA <small>loops</small></PageHeader>
                    <Col md={6}>
                        <Row>
                            <Col md={6} xsOffset={3}>
                                {this.matrix.map((row, idx) => (
                                    <Row key={idx}>
                                        {row.map(cellId => <Cell key={cellId} id={cellId}
                                            gameNivel={this.getNivelPath(this.props.currentNivelId)} />)}
                                        </Row>
                                    ))}
                            </Col>
                        </Row>
                        <Row>
                            <Instructions />
                        </Row>
                    </Col>
                    <Col md={6}>
                        <Code gameNivel={this.getNivelPath(this.props.currentNivelId)} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentNivelId: state.nivelReducer.get('currentNivelId'),
        gameNivel: state.nivelReducer.get('gameNivel')
    }
}

export default connect(mapStateToProps)(Game);
