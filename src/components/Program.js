import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';

import Instructions from './Instructions';
import Code from './Code';

class Program extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Code />
                </Row>
                <Row>
                    <Instructions />
                </Row>
            </Grid>
        );
    }
}

export default Program;
