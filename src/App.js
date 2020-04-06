import React, {Component} from 'react';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.POLLING_INTERVAL_MILLIS = 250;
        this.PXP_GAME_STATUS_ENDPOINT = 'http://172.16.0.16:3000/ping-pong/tables/prototype_controller/game';
//        this.PXP_GAME_STATUS_ENDPOINT = 'http://ec2-35-166-35-105.us-west-2.compute.amazonaws.com:3000/ping-pong/tables/prototype_controller/game';
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
            <div className="App row vh-100">
                <div className="col align-self-center">
                    {this.state.gameState ? this.state.gameState.players[0].id : '---'}
                </div>
                <div className="col align-self-center">
                    {this.state.gameState ? this.state.gameState.players[1].id : '---'}
                </div>
            </div>
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


export default App;