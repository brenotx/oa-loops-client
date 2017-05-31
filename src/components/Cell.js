import React, { Component } from 'react';
// import pedestrianWalking from '../pedestrian-walking.svg';
import '../index.css';
// import { Col } from 'react-bootstrap';

class Cell extends Component {
    // TODO: Refactor to use just one method
    active() {
        return this.props.nivels.indexOf(this.props.id) >= 0;
    }
    
    move() {
        return this.props.userPath.indexOf(this.props.id) >= 0;
    }

    render() {
        let className = 'cell cell-icon';
        if (this.active()) {
            className += ' active';
        }
        if (this.move()) {
            className = 'cell cell-icon move';
        }
        return (
            <div className={className}>
                {/* {this.props.id} */}
                {/* <img className="pedestrianWalking" src={pedestrianWalking} alt="pedestrian-walking" width="25px" height="25px" /> */}
            </div>
        );
    }
}

export default Cell;
