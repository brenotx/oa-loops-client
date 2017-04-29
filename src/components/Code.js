import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Panel, Col, Glyphicon, Button } from 'react-bootstrap';

import { removeInstruction } from '../actions/index';

class Code extends Component {
    constructor(props) {
        super(props);

        this.state = { selectedBox: '' };
    }
    getMainInstructions() {
        return this.props.instructionReducer.get('mainInstructions') || [];
    }

    setSelectedBox(boxName) {
        this.setState({ selectedBox: boxName });
    }

    isActive(boxName) {
        if (boxName === this.state.selectedBox) {
            return 'jumbotron active-box';
        } else {
            return 'jumbotron';
        }
    }

    render() {
        return (
            <Col>
                <Panel header="Código">
                    <h5>Main:</h5>
                    <div className={this.isActive('main')} onClick={() => this.setSelectedBox('main')}>
                        {this.getMainInstructions().map( (icon, idx) =>
                            <Button key={idx} bsStyle="primary" onClick={ () => this.props.removeInstruction(idx)}>
                                <Glyphicon glyph={icon} />
                            </Button>
                        )}
                    </div>
                    <h5>Prog1:</h5>
                    <div className={this.isActive('prog')} onClick={() => this.setSelectedBox('prog')}>
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
        instructionReducer: state.instructionReducer
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ removeInstruction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Code);
