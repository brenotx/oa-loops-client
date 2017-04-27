import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import { Col, Panel, Glyphicon, Button } from 'react-bootstrap';
import Instruction from './Instruction';

class Instructions extends Component {
    getInstructions() {
        return this.props.instructions || [];
    }

    render() {
        return (
            <Col md={8} xsOffset={2}>
                <Panel header="Instruções">
                    {this.getInstructions().map( (icon, idx) =>
                        <Instruction key={idx} icon={icon} />
                    )}
                </Panel>
            </Col>
        );
    }
}

function mapStateToProps(state) {
    return {
        instructions: state.instructions
    };
}

export default connect(mapStateToProps)(Instructions);
