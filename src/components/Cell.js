import React, { Component } from 'react';
// import { Col } from 'react-bootstrap';

class Cell extends Component {
    active() {
        return this.props.activeCells.indexOf(this.props.id) >= 0;
    }

    render() {
        let className = 'cell';
        if (this.active()) {
            className += ' active';
        }
        return (
            // <Col className={className}>
            // </Col>
            <div className={className}>
            </div>
        );
    }
}

export default Cell;
