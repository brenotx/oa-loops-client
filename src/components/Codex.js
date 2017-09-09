import React, { Component } from 'react';

class Codex extends Component {
    render() {
        const pink = {
            color: '#d33682',
            fontWeight: 'bold'
        };
        const green = {
            color: '#2aa198',
            fontWeight: 'bold'
        };
        return (
            <span>
                <span style={pink}>COD</span>
                <span style={green}>EX</span>
            </span>
        );
    }
}

export default Codex;
