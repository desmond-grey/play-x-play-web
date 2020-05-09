import React, {Component} from 'react';
import {Helmet} from 'react-helmet';

import './Home.css';
import pxpLogo from "../../images_shared/play-x-play_logo.png";


class Home extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <style>{'body { background-color: #343a40; }'}</style>
                </Helmet>

                <div className="row h-75 justify-content-center align-items-center">
                    <img id="pxp-logo-home" src={pxpLogo} alt="play-x-play logo"/>
                </div>
            </>
        );
    }
}

export default Home;