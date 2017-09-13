import React, { Component } from "react";

import Codex from "./Codex";

class HomePage extends Component {
    render() {
        const bigLogo = {
            fontSize: "400%"
        };
        return (
            <div className="row">
                <div className="col-md-2 col-md-offset-4">
                    <span style={bigLogo}>
                        <Codex />
                    </span>
                </div>
                <div className="col-md-4 col-md-offset-4">
                    <span>
                        O CODEX é um Objeto de Aprendizagem com a finalidade de auxiliar professores, estudantes e
                        curiosos oferecendo um aplicativo gamificado que apoia o ensino e a aprendizagem de laços de
                        repetição.
                    </span>
                </div>

                <br />
                <div className="navbar navbar-fixed-bottom">
                    <div className="col-lg-12">
                        <p>
                            Criado por{" "}
                            <a href="http://thomaspark.co" rel="nofollow">
                                Breno Teixeira e Bruno Gonçalves
                            </a>.
                        </p>
                        <p>
                            Código sobre a licença{" "}
                            <a href="https://github.com/thomaspark/bootswatch/blob/gh-pages/LICENSE">MIT License</a>.
                        </p>
                        <p>
                            Baseado em{" "}
                            <a href="http://getbootstrap.com" rel="nofollow">
                                Bootstrap
                            </a>. Icones de{" "}
                            <a href="http://fortawesome.github.io/Font-Awesome/" rel="nofollow">
                                Font Awesome
                            </a>. Web fonts de{" "}
                            <a href="http://www.google.com/webfonts" rel="nofollow">
                                Google
                            </a>.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
