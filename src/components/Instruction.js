import React, { Component } from 'react';
import { Glyphicon, Button } from 'react-bootstrap';

// class Instruction extends Component {
//     render() {
//         return (
//             <Button bsStyle="primary"><Glyphicon glyph={this.props.icon} /></Button>
//         );
//     }
// }
//
// export default Instruction;

export default (props) => {
    return (
        <Button bsStyle="primary"><Glyphicon glyph={props.icon} /></Button>
    );
}
