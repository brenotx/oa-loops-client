import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import _ from 'lodash';

import Row from './Row';
import Cell from './Cell';


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
            <div className="grid">
                {this.matrix.map((row, idx) => (
                    <Row key={idx}>
                        {row.map(cellId => <Cell key={cellId} id={cellId}
                                                 activeCells={this.activeCells} />)}
                    </Row>
                ))}
            </div>
            </Grid>
        );
    }
}

export default Game;
