import React from 'react';

import './Player.css';
import hasServeImage from './has_serve.png';


function Player(props) {
    return (
        <div className='Player'>
            <h1>{props.pointsScored}</h1>
            <h2>{props.playerId}</h2>
            {props.hasServe &&
                <img src={hasServeImage} alt="hasServe" width='100px'/>
            }
        </div>
    );
}

export default Player;