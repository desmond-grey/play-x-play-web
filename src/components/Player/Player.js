import React from 'react';

import './Player.css';
import pingPongPaddle from './ping-pong_paddle.svg';


function Player(props) {
    return (
        <div className="card rounded-lg">
            <div className="card-body">
                <h1 className="card-title">{props.pointsScored}</h1>
                <h4 className="card-subtitle">{props.playerId}</h4>

                {props.hasServe &&
                    <img id="has-serve-image" src={pingPongPaddle} alt="hasServe" />
                }
            </div>
        </div>
    );
}

export default Player;