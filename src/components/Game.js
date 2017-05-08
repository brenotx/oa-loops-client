import React, { Component } from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import { List } from 'immutable';

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

        // List with the sequence of cels representing the game path
        // this.gamePath = List(["20", "21", "31", "32", "33", "23", "24"]);
        this.gamePath = List(["20", "21", "22", "23", "24"]);
        // this.gamePath = List(["00", "10", "11", "01", "00"]);
    }

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
                                            gamePath={this.gamePath} />)}
                                        </Row>
                                    ))}
                            </Col>
                        </Row>
                        <Row>
                            <Instructions />
                        </Row>
                    </Col>
                    <Col md={6}>
                        <Code gamePath={this.gamePath} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Game;
