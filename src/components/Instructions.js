import React, { Component } from 'react';
import { Col, Panel, Glyphicon, Button } from 'react-bootstrap';
import Instruction from './Instruction';

class Instructions extends Component {
    render() {
        const instructions = [ 'arrow-right', 'repeat', 'arrow-up'];
        return (
            <Col md={8} xsOffset={2}>
                <Panel header="Instruções">
                    {instructions.map( (icon, idx) =>
                        <Instruction key={idx} icon={icon} />
                    )}
                </Panel>
            </Col>
        );
    }
}

export default Instructions;
