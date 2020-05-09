import React from 'react'
import { render } from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './index.css';

import Home from './components/Home/Home'
import Table from './components/Table/Table'

render((
    <Router>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/table/:tableId">
                <Table />
            </Route>
        </Switch>
    </Router>
), document.getElementById('play-x-play-app'));
