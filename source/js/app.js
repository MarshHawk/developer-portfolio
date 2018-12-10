import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import combinedReducer from './reducers/combinedReducer'
import RootContainer from './containers/rootContainer';

let initialState = {}
let store = createStore(combinedReducer, initialState);

ReactDOM.render(
    <Provider store={store}>

        <RootContainer />
    </Provider>,
    document.getElementById('app')
);