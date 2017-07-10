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

import { fetchUserMaxNivel } from './actions';
import { makeSelectNivels, makeSelectUserMaxNivel } from './selectors';


class NivelsPage extends Component {

    componentDidMount() {
        const userId = localStorage.getItem('user_id');
        this.props.fetchUserMaxNivel(userId);
    }

    renderLocker(nivelId) {
        if (nivelId > this.props.userMaxNivel) {
            return <Glyphicon glyph="lock" />;
        }
        return;
    }

    renderNivels() {
        return this.props.nivels.map(nivel => {
            return (
                 <ListGroupItem key={nivel.get('id')}>
                    <Button bsStyle="primary" block>
                        Nível {nivel.get('id')} &nbsp;
                        {this.renderLocker(nivel.get('id'))}
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
    nivels: makeSelectNivels(),
    userMaxNivel: makeSelectUserMaxNivel()
});

export default connect(mapStateToProps, { fetchUserMaxNivel })(NivelsPage);
