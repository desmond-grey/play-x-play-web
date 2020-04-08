import React from 'react';

import './Player.css';

function Player(props) {
    return (
        <div className='Player'>
            <h1>{props.pointsScored}</h1>
            <h2>{props.playerId}</h2>
        </div>
    );
}

export default Player;