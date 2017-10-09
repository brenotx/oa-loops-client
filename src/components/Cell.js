import React, { Component } from 'react';
// import pedestrianWalking from '../pedestrian-walking.svg';
import '../index.css';
// import { Col } from 'react-bootstrap';

class Cell extends Component {
    // TODO: Refactor to use just one method
    active() {
        if (this.props.nivels.indexOf(this.props.id) >= 0) {
            if (this.props.nivels.indexOf(this.props.id) === 0) {
                return ' start';
            } else if (this.props.nivels.indexOf(this.props.id) === this.props.nivels.size - 1) {
                return ' end';
            } else {
                return ' active';
            }
        }
    }

    move() {
        return this.props.userPath.indexOf(this.props.id) >= 0;
    }

    badMove() {
        return this.props.userPath.indexOf(this.props.id) >= 0 && this.props.nivels.indexOf(this.props.id) === -1;
    }

    render() {
        let className = 'cell-back-ground cell cell-icon circle';
        const white = {
            color: 'white',
            verticalAlign: 'middle',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        };

        // if (this.active()) {
        //     className += ' active';
        // }
        className += this.active();

        if (this.move()) {
            className = 'cell cell-icon circle good-move';
        }

        if (this.badMove()) {
            className = 'cell cell-icon circle bad-move';
        }

        return (
            <div className={className}>
                <span style={white}>&bull;</span>
                {/* {this.props.id} */}
                {/* <img className="pedestrianWalking" src={pedestrianWalking} alt="pedestrian-walking" width="25px" height="25px" /> */}
            </div>
        );
    }
}

export default Cell;
