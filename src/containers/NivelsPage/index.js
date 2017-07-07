import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { 
    Grid,
    Row,
    Col,
    Glyphicon,
    Button,
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';

import { makeSelectNivels } from './selectors';

class NivelsPage extends Component {
    render() {
        const nivels = this.props.nivels;
        
        return (
            <Grid>
                <Row>
                    <Col>
                        <ListGroup>
                            <ListGroupItem>
                                <Button bsStyle="primary" block>
                                    Nível 1 &nbsp;
                                    <Glyphicon glyph="lock" />
                                </Button>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Button bsStyle="primary" block>
                                    Nível 2 &nbsp;
                                    <Glyphicon glyph="lock" />
                                </Button>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Button bsStyle="primary" block>
                                    Nível 3 &nbsp;
                                    <Glyphicon glyph="lock" />
                                </Button>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

// TODO: I don't think you need to use createStructuredSelector here
const mapStateToProps = createStructuredSelector({
    nivels: makeSelectNivels()
});

export default connect(mapStateToProps)(NivelsPage);
