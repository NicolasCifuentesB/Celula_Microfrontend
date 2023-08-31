import { useState } from 'react';
import { BrowserRouter as Router,
    Route,
    Link } from 'react-router-dom';

import logo from '../assets/images/ntt_data_logo.png'

export default function Navbar() {

    const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);

    const openHamburgerMenu = (e): void => {
        setIsHamburgerOpen(!isHamburgerOpen);
        console.log(isHamburgerOpen)
    }

    return (

        <nav className="navbar is-light animate__animated animate__fadeIn animate__slow" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://cl.nttdata.com/">
                    <img src={logo} width="112" height="28" />
                </a>

                <a onClick={openHamburgerMenu} role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <Router>
                <div id="navbarBasicExample" className={isHamburgerOpen ? 'navbar-menu is-active' : 'navbar-menu'}>
                    <div className="navbar-start">
                        <Link className="navbar-item" to="/home">Home</Link>
                        <Link className="navbar-item" to="/react">React</Link>
                        <Link className="navbar-item" to="/angular">Angular</Link>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                Utilidades
                            </a>

                            <div className="navbar-dropdown">
                                <Link className="navbar-item" to="/utilidades/parametria">Parametria front</Link>
                                <Link className="navbar-item" to="/utilidades/webcomponent">Web components lib</Link>
                                <Link className="navbar-item" to="/utilidades/comunicacionentremf">Comunicación entre microfrontends</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        </nav>
    )
}
