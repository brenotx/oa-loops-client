import React, { Component } from "react";

import { Link } from "react-router-dom";

import trophy from "../trophy.svg";

class CongratsPage extends Component {
    render() {
        const successFont = {
            fontWeight: "bold",
            fontSize: "20"
        };
        return (
            <div className="modal-content col-md-3 col-md-offset-4">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 className="modal-title">Parabéns</h4>
                </div>
                <div className="modal-body">
                    <img src={trophy} alt="trophy" width="200" height="200" />
                    <br />
                    <br />
                    <br />
                    <p style={successFont} className="text-success">
                        Você completou todos os níveis!!!
                    </p>
                </div>
                <div className="modal-footer">
                    {/* <button type="button" className="btn btn-default" data-dismiss="modal">
                        Close
                    </button> */}
                    <Link to="/nivels">
                        <button type="button" className="btn btn-primary btn-block">
                            Continuar
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default CongratsPage;
