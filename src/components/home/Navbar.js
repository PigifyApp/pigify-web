import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="src/components#">
                        <span className="title is-pink">
                            <i className="fa-solid fa-piggy-bank"></i>

                            <strong> Pigify </strong>
                        </span>
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                       data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                        <a href="https://pigify.gitbook.io/introduction/" target="_blank" className="navbar-item">
                            <span className="icon whitepaper-icon">
                                <i className="fa-solid fa-paperclip"></i>
                            </span>

                            <span className="navbar-text"> Whitepaper </span>
                        </a>

                        <a href="src/components#roadmap" className="navbar-item">
                            <span className="icon has-text-expo">
                                <i className="fas fa-shoe-prints"></i>
                            </span>

                            <span className="navbar-text"> Roadmap </span>
                        </a>

                        <a href="src/components#tokenomics" className="navbar-item">
                            <span className="icon is-yellow">
                                <i className="fa-solid fa-bolt"></i>
                            </span>

                            <span className="navbar-text"> Tokenomics </span>
                        </a>

                        <div className="navbar-item">
                            <Link to="/home" className="button presale-button is-white">
                                <strong>Presale</strong>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}