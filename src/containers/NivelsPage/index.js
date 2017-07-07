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
import { fetchUserMaxNivel } from './actions';


class NivelsPage extends Component {

    componentDidMount() {
        const userId = localStorage.getItem('user_id');
        this.props.fetchUserMaxNivel(userId);
    }

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

export default connect(mapStateToProps, { fetchUserMaxNivel })(NivelsPage);
