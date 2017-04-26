import React, { Component } from 'react';

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
            <div className={className}>
            </div>
        );
    }
}

export default Cell;
