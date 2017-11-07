import React, { Component } from 'react';

import guide from '../guide.png';

class Guide extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <img src={guide} alt="Guide Image" width="100%" height="100%" />
                </div>
            </div>
        );
    }
}

export default Guide;
