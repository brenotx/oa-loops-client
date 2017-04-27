import React, { Component } from 'react';
import { Panel, Grid, Row, Col, Glyphicon, Button } from 'react-bootstrap';

class Code extends Component {
    render() {
        return (
            <Col>
                <Panel header="Código">
                    <h5>Main:</h5>
                    <div className="jumbotron">
                        <Button bsStyle="primary"><Glyphicon glyph="repeat" /></Button>
                        <Button bsStyle="primary"><Glyphicon glyph="arrow-up" /></Button>
                        <Button bsStyle="primary"><Glyphicon glyph="arrow-right" /></Button>
                    </div>
                    <h5>Prog1:</h5>
                    <div className="jumbotron">
                        <Button bsStyle="primary"><Glyphicon glyph="arrow-right" /></Button>
                        <Button bsStyle="primary"><Glyphicon glyph="arrow-right" /></Button>
                        <Button bsStyle="primary"><Glyphicon glyph="arrow-right" /></Button>
                        <Button bsStyle="primary"><Glyphicon glyph="arrow-right" /></Button>
                    </div>
                </Panel>
            </Col>
        );
    }
}

export default Code;
