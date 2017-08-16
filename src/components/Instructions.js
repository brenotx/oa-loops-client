import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col, Panel, Glyphicon, Button } from 'react-bootstrap';

import { addInstruction } from '../actions/index';

class Instructions extends Component {
    

    /* <button className="btn btn-default" key={idx} onClick={ () => this.props.addInstruction(icon)}>
            <Glyphicon glyph={icon} />
        </button> */
    render() {
        return (
            <Row>
                <Col md={8} xsOffset={2}>
                    <Panel header="Instruções">
                        {this.props.gameNivelInstructions.map((icon, idx) =>
                            <span className={`glyphicon glyphicon-${icon} light-pink small-icon`} key={idx} aria-hidden="true" onClick={ () => this.props.addInstruction(icon)}></span>
                        )}
                    </Panel>
                    {/* <Panel header="Instruções">
                        {this.getInstructions().map( (icon, idx) =>
                            <Instruction key={idx} icon={icon} />
                        )}
                    </Panel> */}
                </Col>
            </Row>
        );
    }
}

function mapStateToProps(state) {
    return {
        instructionReducer: state.instructionReducer
        // instructions: state.instructions,
        // mainInstructions: state.mainInstructions
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addInstruction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Instructions);
