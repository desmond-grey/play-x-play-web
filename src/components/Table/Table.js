import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

import Navbar from '../Navbar/Navbar';
import Player from '../Player/Player';

import './Table.css';

class Table extends Component {
    constructor(props) {
        super(props);

        const { tableId } = this.props.match.params;    // can't use the "useParams" hook within a class.  So we extract router params this way

        this.POLLING_INTERVAL_MILLIS = 1000;
        this.PXP_GAME_STATUS_ENDPOINT = `${process.env.REACT_APP_PXP_API_HOST}/api/ping-pong/tables/${tableId}/game`;
        this.pollingInterval = null;

        this.state = {
            gameState: null
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.pollingInterval = setInterval(() => this.getGameState(), this.POLLING_INTERVAL_MILLIS);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.pollingInterval);
        this.pollingInterval = null;
    }

    render() {
        return (
            <>
                <Navbar/>
                <div className="row flex-fill d-flex justify-content-start pxp-background-table-image">
                    <div className="col align-self-center d-flex justify-content-center">
                        {this.state.gameState &&
                            <Player
                                pointsScored={this.state.gameState.players[0].pointsScored}
                                playerId={this.state.gameState.players[0].id}
                                hasServe={this.state.gameState.players[0].hasServe}
                            />
                        }
                    </div>
                    <div className="col align-self-center d-flex justify-content-center">
                        {this.state.gameState &&
                            <Player
                                pointsScored={this.state.gameState.players[1].pointsScored}
                                playerId={this.state.gameState.players[1].id}
                                hasServe={this.state.gameState.players[1].hasServe}
                            />
                        }
                    </div>
                </div>
            </>
        );
    }

    async getGameState() {
        console.log('Getting game state');
        fetch(this.PXP_GAME_STATUS_ENDPOINT)
            .then(throwErrorIfResponseIsNotOk)
            .then(response => response.text())      // todo: this line, and the line below, should not be necessary.  should just be able to call response.json() function
            .then(resultText => JSON.parse(resultText))
            .then(resultJSON => this.setState({gameState: resultJSON}))
    }
}

function throwErrorIfResponseIsNotOk(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export default withRouter(Table);   // necessary to get fed match from the router