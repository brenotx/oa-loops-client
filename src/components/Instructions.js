import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List } from 'immutable';
import { Col, Panel, Glyphicon, Button } from 'react-bootstrap';

import Instruction from './Instruction';
import { addInstruction } from '../actions/index';

class Instructions extends Component {
    getInstructions() {
        return this.props.instructions || [];
    }

    render() {
        return (
            <Col md={8} xsOffset={2}>
                <Panel header="Instruções">
                    {this.getInstructions().map( (icon, idx) =>
                        <Button key={idx} bsStyle="primary" onClick={ () => this.props.addInstruction(icon)}>
                            <Glyphicon glyph={icon} />
                        </Button>
                    )}
                </Panel>
                {/* <Panel header="Instruções">
                    {this.getInstructions().map( (icon, idx) =>
                        <Instruction key={idx} icon={icon} />
                    )}
                </Panel> */}
            </Col>
        );
    }
}

function mapStateToProps(state) {
    return {
        instructions: state.instructions
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addInstruction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Instructions);
