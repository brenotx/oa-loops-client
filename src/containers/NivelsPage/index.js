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

import { fetchUserMaxNivel, setCurrentNivel } from './actions';
import { makeSelectNivels, makeSelectUserMaxNivel } from './selectors';


class NivelsPage extends Component {

    componentDidMount() {
        const userId = localStorage.getItem('user_id');
        this.props.fetchUserMaxNivel(userId);
    }

    handleButtonDisabled(nivelId) {
        if (nivelId > this.props.userMaxNivel + 1) {
            return true;
        }
        return false;
    }

    renderLocker(nivelId) {
        if (nivelId > this.props.userMaxNivel + 1) {
            return <Glyphicon glyph="lock" />;
        }
        return;
    }

    onNivelButtonClick(selectedNivelId) {
        this.props.setCurrentNivel(selectedNivelId); // TODO: Do you really need this shit?
        this.props.history.push('/game', { nivelId: selectedNivelId});
    }

    // TODO: Redundant logic at renderLocker and handleButtonDisabled methods
    renderNivels() {
        return this.props.nivels.map(nivel => {
            return (
                 <ListGroupItem key={nivel.get('id')}>
                    <Button bsStyle="primary" block onClick={() => this.onNivelButtonClick(nivel.get('id'))} disabled={this.handleButtonDisabled((nivel.get('id')))}>
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

export default connect(mapStateToProps, { fetchUserMaxNivel, setCurrentNivel })(NivelsPage);
