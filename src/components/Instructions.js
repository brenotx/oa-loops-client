import React, { Component } from 'react';
import { Col, Panel, Glyphicon } from 'react-bootstrap';

class Instructions extends Component {
    render() {
        return (
            <Col md={8} xsOffset={2}>
                <Panel header="Instruções">
                    <Glyphicon glyph="arrow-right" />
                    <Glyphicon glyph="repeat" />
                    <Glyphicon glyph="arrow-up" />
                </Panel>
            </Col>
        );
    }
}

export default Instructions;
