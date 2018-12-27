import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import combinedReducer from './reducers/combinedReducer';
import RootContainer from './containers/rootContainer';
import CdSolution from './components/cdSolution';
import './App.css';


let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, createLogger())(createStore)
let store = createStoreWithMiddleware(combinedReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={RootContainer} />
                <Route exact path="/cd-solution" component={CdSolution} />
            </Switch>
        </Router>
    </Provider>
    );
  }
}
export default App;
