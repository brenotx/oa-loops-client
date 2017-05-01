import React, { Component } from 'react';
// import pedestrianWalking from '../pedestrian-walking.svg';
import '../index.css';
// import { Col } from 'react-bootstrap';

class Cell extends Component {
    active() {
        return this.props.gamePath.indexOf(this.props.id) >= 0;
    }

    render() {
        let className = 'cell cell-icon';
        if (this.active()) {
            className += ' active';
        }
        return (
            // <Col className={className}>
            // </Col>
            <div className={className}>
                {this.props.id}
                {/* <img className="pedestrianWalking" src={pedestrianWalking} alt="pedestrian-walking" width="25px" height="25px" /> */}
            </div>
        );
    }
}

export default Cell;
