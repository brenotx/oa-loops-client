import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Panel, Row, Col, Glyphicon, Button } from 'react-bootstrap';

import { removeInstruction } from '../actions/index';

class Code extends Component {
    getMainInstructions() {
        return this.props.mainInstructions || [];
    }

    render() {
        return (
            <Col>
                <Panel header="Código">
                    <h5>Main:</h5>
                    <div className="jumbotron active-box">
                        {this.getMainInstructions().map( (icon, idx) =>
                            <Button key={idx} bsStyle="primary" onClick={ () => this.props.removeInstruction(idx)}>
                                <Glyphicon glyph={icon} />
                            </Button>
                        )}
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

function mapStateToProps(state) {
    return {
        mainInstructions: state.mainInstructions
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ removeInstruction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Code);
