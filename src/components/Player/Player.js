import React from 'react';

import './Player.css';
import hasServeImage from './has_serve.png';


function Player(props) {
    return (
        <div className="card rounded-lg">
            <div className="card-body">
                <h1 className="card-title">{props.pointsScored}</h1>
                <h4 className="card-subtitle">{props.playerId}</h4>

                {props.hasServe &&
                    <img id="has-serve-image" src={hasServeImage} alt="hasServe" />
                }
            </div>
        </div>
    );
}

export default Player;