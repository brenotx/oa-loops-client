import React, { Component } from 'react';
import { Panel, Grid, Row, Col, Glyphicon } from 'react-bootstrap';

class Code extends Component {
    render() {
        return (
            <Col>
                <Panel header="Código">
                    <h5>Main:</h5>
                    <div className="jumbotron">
                        <Glyphicon glyph="arrow-right" />
                        <Glyphicon glyph="arrow-right" />
                        <Glyphicon glyph="arrow-right" />
                    </div>
                    <h5>Prog1:</h5>
                    <div className="jumbotron">
                        <Glyphicon glyph="arrow-right" />
                        <Glyphicon glyph="arrow-right" />
                        <Glyphicon glyph="arrow-right" />
                        <Glyphicon glyph="arrow-right" />
                        <Glyphicon glyph="arrow-right" />
                    </div>
                </Panel>
            </Col>
        );
    }
}

export default Code;
