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

    renderNivels() {
        return this.props.nivels.map(nivel => {
            return (
                 <ListGroupItem key={nivel.get('id')}>
                    <Button bsStyle="primary" block>
                        Nível {nivel.get('id')} &nbsp;
                        <Glyphicon glyph="lock" />
                    </Button>
                </ListGroupItem>
            );
        });
    }

    render() {
        const nivels = this.props.nivels;
        
        return (
            <Grid>
                <Row>
                    <Col>
                        <ListGroup>
                            {this.renderNivels()}
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
