import React, { Component } from 'react';
import { 
    Grid,
    Row,
    Col,
    Glyphicon,
    Button,
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';

class NivelPage extends Component {
    render() {
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

export default NivelPage;