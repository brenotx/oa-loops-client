import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Glyphicon, Button } from 'react-bootstrap';

// class Instruction extends Component {
//     render() {
//         return (
//             <Button bsStyle="primary" onClick={this.props.selectInstruction(this.props.icon)}>
//                 <Glyphicon glyph={this.props.icon} />
//             </Button>
//         );
//     }
// }
//
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ selectInstruction }, dispatch);
// }
//
// export default connect()(Instruction);

export default (props) => {
    return (
        <Button bsStyle="primary">
            <Glyphicon glyph={props.icon} />
        </Button>
    );
}
