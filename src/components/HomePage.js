import React, { Component } from 'react';

import Codex from './Codex';

class HomePage extends Component {
    render() {
        const bigLogo = {
            fontSize: '400%'
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
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.
                    </span>
                </div>

                <br />
                <div className="navbar navbar-fixed-bottom">
                    <div className="col-lg-12">
                        <p>
                            Criado por{' '}
                            <a href="http://thomaspark.co" rel="nofollow">
                                Breno Teixeira e Bruno
                            </a>.
                        </p>
                        <p>
                            Código sobre a licença{' '}
                            <a href="https://github.com/thomaspark/bootswatch/blob/gh-pages/LICENSE">MIT License</a>.
                        </p>
                        <p>
                            Baseado em{' '}
                            <a href="http://getbootstrap.com" rel="nofollow">
                                Bootstrap
                            </a>. Icones de{' '}
                            <a href="http://fortawesome.github.io/Font-Awesome/" rel="nofollow">
                                Font Awesome
                            </a>. Web fonts de{' '}
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
