import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import combinedReducer from './reducers/combinedReducer';
import RootContainer from './containers/rootContainer';
import SolutionComponent from './components/solutionComponent';

let initialState = {}
let store = createStore(combinedReducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={RootContainer} />
                <Route path="/ci" component={SolutionComponent} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('app')
);