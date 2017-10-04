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
                        CODEX é um objeto de aprendizagem desenvolvido como trabalho de conclusão do Curso de
                        Licenciatura em Computação da Universidade de Brasília pelos alunos Breno Teixeira e Bruno
                        Gonçalves, sob orientação das professoras Leticia Lopes Leite e Márcia Cristina Moraes. Este
                        objeto de aprendizagem tem como objetivo proporcionar a professores, estudantes e interessados
                        um aplicativo gamificado que apoia o ensino e a aprendizagem de laços de repetição.
                    </span>
                </div>

                <br />
                <div className="navbar navbar-fixed-bottom">
                    <div className="col-lg-12">
                        <p>
                            Criado por{" "}
                            <a href="https://github.com/brenotx" rel="nofollow">
                                Breno Teixeira
                            </a>{" "}
                            e &nbsp;
                            <a rel="nofollow">Bruno Gonçalves</a>.
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
