import React from 'react';

import './Navbar.css';
import pxpLogo from "../../images_shared/play-x-play_logo.png";


function Navbar(props) {
    return (
        <div className="row no-gutters">
            <div className="col">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">
                        <img id="pxp-logo-navbar" src={pxpLogo} alt="play-x-play logo"/>
                    </a>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;