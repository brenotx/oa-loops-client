import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Glyphicon, Button } from 'react-bootstrap';


export default (props) => {
    return (
        <Button bsStyle="primary">
            <Glyphicon glyph={props.icon} />
        </Button>
    );
}
