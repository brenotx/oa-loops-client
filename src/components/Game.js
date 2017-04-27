import React, { Component } from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import _ from 'lodash';

// import Row from './Row';
import Cell from './Cell';
import Program from './Program';
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

        // let flatMatrix = _.flatten(this.matrix);
        // this.activeCells = _.sampleSize(flatMatrix, this.props.activeCellsCount);
        this.activeCells = ["20", "21", "22", "23", "13", "14"];
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
                                            activeCells={this.activeCells} />)}
                                        </Row>
                                    ))}
                            </Col>
                        </Row>
                        <Row>
                            <Instructions />
                        </Row>
                    </Col>
                    <Col md={6}>
                        <Code />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Game;
