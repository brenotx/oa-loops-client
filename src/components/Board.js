import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import Cell from './Cell';


class Board extends Component {
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
    }

    render() {
        return (
            <Row>
                <Col md={7} xsOffset={3}>
                    {this.matrix.map((row, idx) => (
                        <Row key={idx}>
                            {row.map(cellId => <Cell key={cellId} id={cellId}
                                nivels={this.props.nivels}
                                userPath={this.props.userPath} />
                            )}
                        </Row>
                    ))}
                </Col>
            </Row>
        )
    }
}

export default Board;
